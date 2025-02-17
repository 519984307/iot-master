package model

//Strategy 响应，待改名
type Strategy struct {
	Disabled bool `json:"disabled"`

	//名称
	Name string `json:"name"`

	//条件
	Condition string `json:"condition"`

	//重复日
	DailyChecker

	//延迟报警
	DelayChecker

	//重复报警
	RepeatChecker

	//执行命令
	Invokes []*Invoke `json:"invokes,omitempty"`
}
