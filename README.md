# 物联大师

**开源不易，加个星再走！！！**

**开源不易，加个星再走！！！**

**开源不易，加个星再走！！！**

![公众号](https://iot-master.com/wxofficial.jpg)

### [说明文档](https://docs.iot-master.com/)  [在线演示demo](http://demo.iot-master.com:8080/) 用户名 admin 密码 123456

[![Go](https://github.com/zgwit/iot-master/actions/workflows/go.yml/badge.svg)](https://github.com/zgwit/iot-master/actions/workflows/go.yml)
[![Go](https://github.com/zgwit/iot-master/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/zgwit/iot-master/actions/workflows/codeql-analysis.yml)
[![codecov](https://codecov.io/gh/zgwit/iot-master/branch/main/graph/badge.svg?token=AK5TD8KQ5C)](https://codecov.io/gh/zgwit/iot-master)
[![Go Reference](https://pkg.go.dev/badge/github.com/zgwit/iot-master.svg)](https://pkg.go.dev/github.com/zgwit/iot-master)
[![Go Report Card](https://goreportcard.com/badge/github.com/zgwit/iot-master)](https://goreportcard.com/report/github.com/zgwit/iot-master)


物联大师是[真格智能实验室](https://labs.zgwit.com)
推出的开源且免费的物联网网关系统，集成了Modbus和主流PLC等多种协议，支持数据采集、公式计算、定时控制、异常报警、自动控制策略、流量监控、远程调试等功能，
适用于大部分物联网或工业互联网应用场景。
系统采用Golang编程实现，支持多种操作系统和CPU架构，可以运行在智能网关上，也可以安装在现场的电脑或工控机上，还可以部署到云端服务器。
系统支持可视化显示，内置组态编辑器和组件库，能够实现Web组态（SCADA），支持投放到大屏上。

项目摒弃复杂的平台架构思维，远离微服务，从真实需求出发，注重用户体验，做到简捷而不简单，真正解决物联网缺乏灵魂的问题。
我们的宗旨是：让物联网实施变成一件简单的事情!!!

## 项目的优势

- 开源免费，商业应用也不限制
- 单一程序文件，不需要配置环境，不依赖第三方服务，放服务器上就能跑
- 极小内存占用，对于一百节点以内的物联网项目，只需要几十兆内存足够了，~~比起隔壁Java动辄大几百兆内存简直太省了~~
- 支持工控机和智能网关，边缘计算也没问题
- 支持Web组态，可视化，大屏展示，~~毕竟很多物联网项目都是面子工程~~
- 在线产品库、模板库、组态库，小白也能分分钟搞得有模有样【还在努力建设中】


## 项目架构图

![结构图](https://iot-master.com/frame.svg)

## 组态编辑器（可视化）

![云组态](https://iot-master.com/hmi-editor.png)


### 数据库支持

| 类型    | 默认数据库（嵌入式） | 其他数据库                   |
|-------|------------|-------------------------|
| 关系数据库 | sqlite     | MySQL、PostgreSQL、Oracle |
| 时序数据库 | tstorage   | InfluxDB 2.0            |

> 因为智能网关的资源比较有限，嵌入式数据库资源消耗少，安装方便，开箱即用。

## 协议支持

| 名称                   | 支持  | 测试  | 说明          |
|----------------------|-----|-----|-------------|
| Modbus RTU           | ✔   | ✔   |             |
| Modbus TCP           | ✔   | ✔   |             |
| Modbus ASCII         | ❌   |     | 使用场景较少，暂不支持 |
| Omron Fins           | ✔   | 待测试 |             |
| Omron Hostlink       | ✔   | 待测试 |             |
| Siemens PPI          | ❌   |     |             |
| Siemens FetchWrite   | ❌   |     |             |
| Siemens S7           | ✔   | ✔   |             |
| Mitsubishi FxProgram | ❌   |     |             |
| Mitsubishi FxSpecial | ❌   |     |             |
| Mitsubishi A1C       | ❌   |     |             |
| Mitsubishi A1E       | ❌   |     |             |
| Mitsubishi Q2C       | ❌   |     |             |
| Mitsubishi Q3E       | ❌   |     |             |
| Mitsubishi Q4C       | ❌   |     |             |
| Mitsubishi Q4E       | ❌   |     |             |

## 咨询服务
**本公司目前提供免费的物联网方案咨询服务，结合我们十多年的行业经验，给您提供最好的建议，请联系 15161515197（微信同号）**

> PS. 提供此服务的主要目的是让用户少走弯路，为物联网行业的健康发展尽绵薄之力。
> 总结一下常见的弯路：
> 1. 前期使用某个物联网云平台，后期没办法继续，二次开发受限
> 2. 花了几千元买了工业网关，用着一百元DTU的功能
> 3. 找多个外包公司，低价拿单，结果做出屎一样的东西
> 4. 盲目使用开源项目，最终被开源项目所累
> 5. 硬件选型失败，效果差强人意
> 6. 自身技术人员能力有限，架构设计有问题
> 7. 不支持高并发量，市场爆发了，平台反而跟不上
> 8. 等等


## 案例

![案例](https://iot-master.com/ppt/08.jpg)

![案例](https://iot-master.com/ppt/09.jpg)

## 联系方式

- 邮箱：[jason@zgwit.com](mailto:jason@zgwit.com)
- 手机：[15161515197](tel:15161515197)(微信同号)

![微信群](https://iot-master.com/iot-master.png)