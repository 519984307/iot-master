package connect

import (
	"errors"
	"github.com/jacobsa/go-serial/serial"
	"github.com/zgwit/iot-master/db"
	"github.com/zgwit/iot-master/log"
	"github.com/zgwit/iot-master/model"
	"time"
)

//TunnelSerial 串口
type TunnelSerial struct {
	tunnelBase
}

func newTunnelSerial(tunnel *model.Tunnel) *TunnelSerial {
	return &TunnelSerial{
		tunnelBase: tunnelBase{tunnel: tunnel},
	}
}

//Open 打开
func (s *TunnelSerial) Open() error {
	if s.running {
		return errors.New("serial is opened")
	}
	s.Emit("open")

	options := serial.OpenOptions{
		PortName:        s.tunnel.Addr,
		BaudRate:        s.tunnel.Serial.BaudRate,
		DataBits:        s.tunnel.Serial.DataBits,
		StopBits:        s.tunnel.Serial.StopBits,
		ParityMode:      serial.ParityMode(s.tunnel.Serial.ParityMode),
		Rs485Enable:     s.tunnel.Serial.RS485,
		MinimumReadSize: 4, //避免只读了一个字节就返回
	}
	port, err := serial.Open(options)
	if err != nil {
		//TODO 串口重试
		s.Retry()
		return err
	}
	s.running = true
	s.link = port
	s.retry = 0

	//清空重连计数
	s.retry = 0

	go s.receive()

	//上线
	s.tunnel.Last = time.Now()
	_, _ = db.Engine.ID(s.tunnel.Id).Cols("last").Update(s.tunnel)

	return nil
}
func (s *TunnelSerial) Retry() {
	retry := &s.tunnel.Retry
	if retry.Enable && (retry.Maximum == 0 || s.retry < retry.Maximum) {
		s.retry++
		s.retryTimer = time.AfterFunc(time.Second*time.Duration(retry.Timeout), func() {
			s.retryTimer = nil
			err := s.Open()
			if err != nil {
				log.Error(err)
			}
		})
	}
}

func (s *TunnelSerial) receive() {
	s.running = true
	s.Emit("online")

	buf := make([]byte, 1024)
	for {
		n, err := s.link.Read(buf)
		if err != nil {
			s.onClose()
			break
		}
		if n == 0 {
			continue
		}
		//透传转发
		if s.pipe != nil {
			_, err = s.pipe.Write(buf[:n])
			if err != nil {
				s.pipe = nil
			} else {
				continue
			}
		}
		s.Emit("data", buf[:n])
	}
	s.running = false
	s.Emit("offline")

	s.Retry()
}
