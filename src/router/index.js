import Vue from 'vue'

import Router from 'vue-router'
import NotFound from '../components/404'
import { Event } from '../main.js'
import {
  Login,
  Register,
  Home,
  UserInfo,
  Welcome,
  My,
  OthersMy,
  BasicInfo,
  Fans,
  Follows,
  Collects,
  Discover,
  Stars,
  Report,
} from '../views'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/',
      name: 'Index',
      component: Login,
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
      },
    },
    {
      path: '/userinfo',
      name: 'UserInfo',
      component: UserInfo,
      meta: {
        requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
      },
    },
    {
      path: '/index',
      name: 'index',
      component: Welcome,
    },

    {
      path: '/my',
      name: 'My',
      component: My,
    },
    {
      path: '/othersmy',
      name: 'OthersMy',
      component: OthersMy,
    },
    {
      path: '/basicInfo',
      name: 'BasicInfo',
      component: BasicInfo,
    },
    {
      path: '/my/fans',
      name: 'Fans',
      component: Fans,
    },
    {
      path: '/my/follows',
      name: 'Follows',
      component: Follows,
    },
    {
      path: '/my/collects',
      name: 'Collects',
      component: Collects,
    },
    {
      path: '/discover',
      name: 'Discover',
      component: Discover,
    },
    {
      path: '/stars',
      name: 'Stars',
      component: Stars,
    },
    {
      path: '/report',
      name: 'Report',
      component: Report,
    },
    {
      path: '*',
      component: NotFound,
    },
  ],
})

router.beforeEach((to, from, next) => {
  Event.$emit('welcome')
  if (to.matched.some((record) => record.meta.requireAuth)) {
    // 判断该路由是否需要登录权限
    if (localStorage.getItem('account')) {
      // 判断当前的user_id是否存在 ； 登录存入的user_id
      console.log(localStorage.getItem('account'))
      next()
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }, // 将要跳转路由的path作为参数，传递到登录页面
      })
    }
  } else {
    next()
  }
})
export default router
