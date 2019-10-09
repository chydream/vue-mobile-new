import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: () => import(/* webpackChunkName: "group-foo" */'@/mobile/mvue/layout/Index'),
      children: [
        {
          path: 'index',
          name: 'HomeIndex',
          component: () => import(/* webpackChunkName: "group-foo" */'@/mobile/mvue/views/home/Home')
        },
        {
          path: 'cal',
          name: 'Cal',
          component: () => import(/* webpackChunkName: "group-foo" */'@/mobile/mvue/views/cal/Cal')
        }
      ]
    },
    {
      path: '/',
      name: 'Login',
      component: () => import(/* webpackChunkName: "group-foo" */'@/mobile/login/Login')
    },
    {
      path: '*',
      redirect: '/error/404'
    },
    {
      path: '/error/403',
      name: 'Error403',
      component: () => import(/* webpackChunkName: "group-foo" */'@/mobile/error/403')
    },
    {
      path: '/error/404',
      name: 'Error404',
      component: () => import(/* webpackChunkName: "group-foo" */'@/mobile/error/404')
    }
  ]
})
export default router

// 路由生命周期
router.beforeEach((to, from, next) => {
  Vue.$vux.loading.show({
    text: '加载中'
  })
  if (store.getters.mobileToken) {
    if (to.path == '/') {
      next({path: '/home/index', replace: true})
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
      next({path: '/', replace: true})
    } 
  }
})
// 路由生命周期
router.afterEach((to, from) => {
  setTimeout(() => {
    Vue.$vux.loading.hide()
  }, 200)
})
