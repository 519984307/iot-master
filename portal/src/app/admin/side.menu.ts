
export let SideMenu = [
  {
    title: '控制台',
    icon: 'dashboard',
    router: 'dash',
    // open: true,
    // children: [
    //   {
    //     title: '仪表盘',
    //     router: 'dash'
    //   },
    // ]
  },
  {
    title: '通道管理',
    icon: 'block',
    children: [
      {
        title: '通道',
        router: 'tunnel'
      },
      {
        title: '链路',
        router: 'link'
      },
    ]
  },
  {
    title: '项目管理',
    icon: 'cluster', //project
    children: [
      {
        title: '项目',
        router: 'project'
      },
      {
        title: '模板库',
        router: 'template'
      },
    ]
  },
  {
    title: '设备管理',
    icon: 'appstore',
    children: [
      {
        title: '设备',
        router: 'device'
      },
      {
        title: '元件库',
        router: 'element'
      },
    ]
  },
  {
    title: '告警管理',
    icon: 'bell',
    open: false,
    disable: true,
    children: [
      {
        title: '告警日志',
        router: 'alarm'
      },
    ]
  },
  {
    title: '系统扩展',
    icon: 'appstore-add',
    open: false,
    children: [
      {
        title: '插件',
        router: 'plugin'
      },
      {
        title: '协议',
        router: 'protocol'
      },
      {
        title: '接口',
        router: 'api'
      },
    ]
  },
  {
    title: '设置',
    icon: 'setting',
    open: false,
    children: [
      {
        title: '系统设置',
        router: 'setting'
      },
      {
        title: '用户管理',
        router: 'user'
      },
      {
        title: '修改密码',
        router: 'password'
      },
    ]
  },
  {
    title: '退出',
    icon: 'logout',
    router: 'logout'
  }
];
