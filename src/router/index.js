import Vue from 'vue'
import Router from 'vue-router'
import {
  Login,
  Register,
  Home,
  UserInfo,
  Welcome,
  test,
  My,
  BasicInfo,
  Fans,
  Follows,
  Collects
} from '../views'

Vue.use(Router)

export default new Router({
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
    },
    {
      path: '/userinfo',
      name: 'UserInfo',
      component: UserInfo,
    },
    {
      path: '/index',
      name: 'index',
      component: Welcome,
    },
    {
      path: '/test',
      name: 'Test',
      component: test,
    },
    {
      path: '/my',
      name: 'My',
      component: My,
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
  ],
})
