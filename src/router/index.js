import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/themes/cvue/layout/Index'

Vue.use(Router)
// 路由实例
const router = new Router({
  scrollBehavior (to, from, savedPosition) { // 路由滚动行为
    if (savedPosition) {
        return savedPosition
    } else {
        const position = {}
        if (to.hash) {
            position.selector = to.hash
        }
        if (to.matched.some(m => m.meta.scrollToTop)) {
            position.x = 0
            position.y = 0
        }
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(position)
            }, 500)
        })
    }
  },
  routes: [
    {
      path: '/h',
      name: 'HelloWorld',
      component: () => import(/* webpackChunkName: "group-foo" */'../components/HelloWorld')
    },
    {
      path: '/index',
      name: 'Index',
      component: () => import(/* webpackChunkName: "group-foo" */'../themes/cvue/layout/Index'),
      children: [
        {
          path: 'home',
          name: 'Home',
          component: () => import(/* webpackChunkName: "group-foo" */'../themes/cvue/views/home/Home')
        }
      ]
    },
    {
      path: '/button',
      name: 'Button',
      component: () => import(/* webpackChunkName: "group-foo" */'../doc/button.md')
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import(/* webpackChunkName: "group-foo" */'../themes/login/Login')
    },
    {
      path: '*',
      redirect: '/error/404'
    },
    {
      path: '/error/403',
      name: 'Error403',
      component: () => import(/* webpackChunkName: "group-foo" */'../themes/error/403')
    },
    {
      path: '/error/404',
      name: 'Error404',
      component: () => import(/* webpackChunkName: "group-foo" */'../themes/error/404')
    },
    {
      path: '/item',
      name: 'Item',
      component: Layout,
      children: [
        {
          path: 'page',
          name: 'Page',
          component: () => import(/* webpackChunkName: "group-foo" */'../themes/cvue/views/item/Page')
        },
        {
          path: 'auth',
          name: 'Auth',
          component: () => import(/* webpackChunkName: "group-foo" */'../themes/cvue/views/item/Auth')
        },
        {
          path: 'dialog',
          name: 'Dialog',
          component: () => import(/* webpackChunkName: "group-foo" */'../themes/cvue/views/item/Dialog')
        }
      ]
    }
  ]
})
export default router
