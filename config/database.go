package config

//Database 参数
type Database struct {
	Type     string `yaml:"type"`
	URL      string `yaml:"url"`
	Debug    bool   `yaml:"debug"`
	LogLevel int    `json:"log_level"`
}

var DatabaseDefault = Database{
	Type:     "sqlite",
	URL:      "sqlite3.db",
	Debug:    false,
	LogLevel: 4,
}
