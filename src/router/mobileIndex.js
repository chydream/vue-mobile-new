import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: () =>
        import(
          /* webpackChunkName: "group-foo" */ '@/mobile/mvue/layout/Index'
        ),
      children: [
        {
          path: 'index',
          name: 'HomeIndex',
          component: () =>
            import(
              /* webpackChunkName: "group-foo" */ '@/mobile/mvue/views/home/Home'
            ),
          meta: {
            title: '首页'
          }
        }
      ]
    },
    {
      path: '/workflow',
      name: '工作流',
      component: () =>
        import(
          /* webpackChunkName: "group-foo" */ '@/mobile/mvue/layout/Index'
        ),
      children: [
        {
          path: 'index',
          name: 'Workflow',
          component: () =>
            import(
              /* webpackChunkName: "group-foo" */ '@/mobile/mvue/views/workflow/index'
            ),
          meta: {
            title: '工作流'
          }
        },
        {
          path: 'edit-leave',
          name: 'editLeave',
          component: () =>
            import(
              /* webpackChunkName: "group-foo" */ '@/mobile/mvue/views/workflow/editLeave'
            ),
          meta: {
            title: '请假条'
          }
        },
        {
          path: 'flow-detail',
          name: 'flowDetail',
          component: () =>
            import(
              /* webpackChunkName: "group-foo" */ '@/mobile/mvue/views/workflow/flowDetail'
            ),
          meta: {
            title: '详情'
          }
        }
      ]
    },
    {
      path: '/payroll',
      name: '工资条',
      component: () =>
        import(
          /* webpackChunkName: "group-foo" */ '@/mobile/mvue/layout/Index'
        ),
      children: [
        {
          path: 'index',
          name: 'payroll',
          component: () =>
            import(
              /* webpackChunkName: "group-foo" */ '@/mobile/mvue/views/payroll/index'
            ),
          meta: {
            title: '工资条'
          }
        }
      ]
    },
    {
      path: '/notice',
      name: '通知公告',
      component: () =>
        import(
          /* webpackChunkName: "group-foo" */ '@/mobile/mvue/layout/Index'
        ),
      children: [
        {
          path: 'index',
          name: 'notice',
          component: () =>
            import(
              /* webpackChunkName: "group-foo" */ '@/mobile/mvue/views/notice/index'
            ),
          meta: {
            title: '通知公告'
          }
        },
        {
          path: 'releaseNotice',
          name: 'releaseNotice',
          component: () =>
            import(
              /* webpackChunkName: "group-foo" */ '@/mobile/mvue/views/notice/releaseNotice'
            ),
          meta: {
            title: '发布通知'
          }
        },
        {
          path: 'inquiryNotice',
          name: 'inquiryNotice',
          component: () =>
            import(
              /* webpackChunkName: "group-foo" */ '@/mobile/mvue/views/notice/inquiryNotice'
            ),
          meta: {
            title: '通知查询'
          }
        },
        {
          path: 'searchResult',
          name: 'searchResult',
          component: () =>
            import(
              /* webpackChunkName: "group-foo" */ '@/mobile/mvue/views/notice/searchResult'
            ),
          meta: {
            title: '查询结果'
          }
        },
        {
          path: 'new',
          name: 'new',
          component: () =>
            import(
              /* webpackChunkName: "group-foo" */ '@/mobile/mvue/views/notice/new'
            ),
          meta: {
            title: '下拉加载'
          }
        }
      ]
    },
    {
      path: '/email',
      name: 'email',
      component: () =>
        import(
          /* webpackChunkName: "group-foo" */ '@/mobile/mvue/layout/Index'
        ),
      children: [
        {
          path: 'list',
          name: 'list',
          component: () =>
            import(
              /* webpackChunkName: "group-foo" */ '@/mobile/mvue/views/email/list'
            )
        },
        {
          path: 'detail',
          name: 'detail',
          component: () =>
            import(
              /* webpackChunkName: "group-foo" */ '@/mobile/mvue/views/email/detail'
            )
        },
        {
          path: 'write',
          name: 'write',
          component: () =>
            import(
              /* webpackChunkName: "group-foo" */ '@/mobile/mvue/views/email/write'
            )
        },
        {
          path: 'man',
          name: 'man',
          component: () =>
            import(
              /* webpackChunkName: "group-foo" */ '@/mobile/mvue/views/email/man'
            )
        }
      ]
    },
    {
      path: '/',
      name: 'Login',
      component: () =>
        import(/* webpackChunkName: "group-foo" */ '@/mobile/login/Login')
    },
    {
      path: '*',
      redirect: '/error/404'
    },
    {
      path: '/error/403',
      name: 'Error403',
      component: () =>
        import(/* webpackChunkName: "group-foo" */ '@/mobile/error/403')
    },
    {
      path: '/error/404',
      name: 'Error404',
      component: () =>
        import(/* webpackChunkName: "group-foo" */ '@/mobile/error/404')
    }
  ]
})
export default router

// 路由生命周期
router.beforeEach((to, from, next) => {
  Vue.$vux.loading.show({
    text: '加载中'
  })
  store
    .dispatch('mobileCommon/GgetTokenByPC', '')
    .then(res => {
      if (store.getters.mobileToken) {
        if (to.path == '/') {
          next({ path: '/home/index', replace: true })
          setTimeout(() => {
            Vue.$vux.loading.hide()
          }, 200)
        } else {
          next()
        }
      } else {
        if (to.path == '/') {
          next()
        } else {
          next({ path: '/', replace: true })
        }
      }
    })
    .catch(error => {
      console.log(error)
      // next({path: '/home/index', replace: true})
    })
})
// 路由生命周期
router.afterEach((to, from) => {
  window.document.title = to.meta.title
  setTimeout(() => {
    Vue.$vux.loading.hide()
  }, 200)
})
