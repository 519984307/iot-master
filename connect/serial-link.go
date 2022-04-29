package connect

import (
	"github.com/zgwit/iot-master/events"
	"io"
)

//SerialLink 串口连接
type SerialLink struct {
	events.EventEmitter

	id   int
	port io.ReadWriteCloser
}

func newSerialLink(port io.ReadWriteCloser) *SerialLink {
	return &SerialLink{
		port: port,
	}
}

//Id Id
func (l *SerialLink) Id() int {
	return l.id
}

//Write 写
func (l *SerialLink) Write(data []byte) error {
	_, err := l.port.Write(data)
	if err != nil {
		l.onClose()
	}
	return err
}

func (l *SerialLink) receive() {
	buf := make([]byte, 1024)
	for {
		n, err := l.port.Read(buf)
		if err != nil {
			l.onClose()
			break
		}
		if n == 0 {
			continue
		}
		l.Emit("data", buf[:n])
	}
}

//Close 关闭
func (l *SerialLink) Close() error {
	l.onClose()
	return l.port.Close()
}

func (l *SerialLink) onClose() {
	l.Emit("close")
}
