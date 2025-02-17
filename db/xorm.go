package db

import (
	"github.com/zgwit/iot-master/config"
	"github.com/zgwit/iot-master/model"
	"xorm.io/xorm"
	"xorm.io/xorm/log"

	//加载数据库驱动
	//_ "github.com/mattn/go-sqlite3" //CGO版本
	_ "github.com/glebarez/go-sqlite" //纯Go版本 使用ccgo翻译的，暂未发现问题
	_ "github.com/go-sql-driver/mysql"
	_ "github.com/lib/pq"
)

var Engine *xorm.Engine

func Open(cfg *config.Database) error {
	var err error
	Engine, err = xorm.NewEngine(cfg.Type, cfg.URL)
	if err != nil {
		return err
	}
	if cfg.Debug {
		Engine.ShowSQL(true)
	}

	Engine.SetLogLevel(log.LogLevel(cfg.LogLevel))
	//Engine.SetLogger(logrus.StandardLogger())

	//同步表
	err = Sync()
	if err != nil {
		return err
	}

	return nil
}

func Close() error {
	return Engine.Close()
}

func Sync() error {
	return Engine.Sync2(
		new(model.User), new(model.Password),
		new(model.Tunnel), new(model.Server), new(model.Transfer),
		new(model.Device), new(model.Product),
		new(model.Project), new(model.Template),
		new(model.Hmi), new(model.Component),
		new(model.Event),
		new(model.DeviceAlarm), new(model.ProjectAlarm),
	)
}
