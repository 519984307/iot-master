# DTU-Admin

顾名思义，DTU-Admin就是DTU（数据传输单元）的管理后台，
集成了Modbus和主流PLC协议，可以作为通用的物联网或工业互联网数据后端，
提供数据自动采集，历史存储，定时和自动控制策略等功能。
平台提供丰富的元件库和在线模板，可以直接用于大部分物联网项目后端，真正实现零代码开发。

>作者曾经接触多个物联网实际项目的后端，需求大同小异，
因为团队不同，实现方式就千奇百怪了，大家其实都在重复地造轮子。
痛定思痛，于是决定提取共同的部分，做成了通用的DTU-Admin，
并且通过开源的方式免费分享给小伙伴儿们使用。


详情移步 [<真格智能实验室>](http://labs.zgwit.com)


## 主要功能和特点
1. 数据通道管理，支持TCP/UDP，Server/Client，解析注册包，过滤心跳包；
2. 虚拟串口透传，方便远程调试；
3. 内置Modbus协议，支持自定义协议和脚本扩展；
4. 自建项目：数据采集，自动控制；
5. 提供在线元件库 & 在线模板库；
6. 内置数据库引擎，无需安装mysql等关系数据库服务；
7. 单一可执行文件，安装部署简单。

## 支持的设备
1. DTU数据传输单元；
2. 移动通信模组；
3. WiFi模组，比如：ESP8266、ESP32；
4. RJ45模组，比如：W5500、ENC28J60；
5. 蓝牙网关。

## 其他
1. 暂不支持MQTT5

## QQ交流群
群1：1056372793





