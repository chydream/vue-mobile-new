// import Mock from 'mockjs'
let menu = {
    admin: [
        {
            id: 1,
            label: '首页',
            href: '/index/home',
            icon: 'fa fa-users',
            permission: ['view', 'add', 'delete', 'edit'],
            show: true,
            children: []
        },
        {
          id: 4,
          label: '权限配置',
          href: '/item/auth',
          icon: 'fa fa-users',
          permission: ['view', 'add', 'delete', 'edit'],
          show: true,
          children: []
        },
        {
          id: 4,
          label: '页面',
          href: '/item/page',
          icon: 'fa fa-users',
          permission: ['view', 'add', 'delete', 'edit'],
          show: true,
          children: []
        },
        {
          id: 5,
          label: '弹窗',
          href: '/item/dialog',
          icon: 'fa fa-users',
          permission: ['view', 'add', 'delete', 'edit'],
          show: true,
          children: []
        },
        {
            id: 2,
            label: '分类页',
            href: '',
            icon: 'fa fa-users',
            permission: ['view', 'add', 'delete', 'edit'],
            show: true,
            children: [
              {
                id: 21,
                label: '产品',
                href: '/item/page',
                icon: 'fa fa-user-secret',
                permission: ['view', 'add', 'delete', 'edit'],
                show: false,
                children: []
              }
            ]
        },
        {
            id: 3,
            label: '表格',
            href: '',
            icon: 'fa fa-users',
            permission: ['view', 'add', 'delete', 'edit'],
            show: true,
            children: [
              {
                id: 31,
                label: '表格1',
                href: '/item/page',
                icon: 'fa fa-user-secret',
                permission: ['view', 'add', 'delete', 'edit'],
                show: true,
                children: [
                    {
                        id: 301,
                        label: '子表格',
                        href: '/item/page',
                        icon: 'fa fa-user-secret',
                        permission: ['view', 'add', 'delete', 'edit'],
                        show: false,
                        children: []
                    }
                ]
              }
            ]
        }
    ],
    user: []
}
// Mock.mock(/\/user\/menu/, 'post', menu)
export default menu
