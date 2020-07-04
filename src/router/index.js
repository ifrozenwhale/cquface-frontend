import Vue from 'vue'
import Router from 'vue-router'
import { Login, Register, Home, UserInfo } from '../views'
// import Login from '@/components/Login'
// import Register from '@/components/Register'
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
  ],
})
