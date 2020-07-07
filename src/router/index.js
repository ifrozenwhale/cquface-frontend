import Vue from 'vue'
import Router from 'vue-router'
import {
  Login,
  Register,
  Home,
  UserInfo,
  Welcome,
  Discover,
  Stars,
  Report,
} from '../views'
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
    {
      path: '/index',
      name: 'index',
      component: Welcome,
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
  ],
})
