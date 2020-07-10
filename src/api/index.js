// appfront/src/api/index.js
import Vue from 'vue'
import Axios from 'axios'
import router from '../router/index'
const axiosInstance = Axios.create({
  withCredentials: true,
})

// 通过拦截器处理csrf问题
axiosInstance.interceptors.request.use((config) => {
  config.headers['X-Requested-With'] = 'XMLHttpRequest'
  const regex = /.*csrftoken=([^;.]*).*$/
  config.headers['X-CSRFToken'] = document.cookie.match(regex) === null ? null : document.cookie.match(regex)[1]
  // 添加token
  if (localStorage.getItem('token')) {
    // 判断是否存在token，如果存在的话，则每个http header都加上token
    config.headers['Authorization'] = localStorage.getItem('token')
  }
  return config
})

// http response 拦截器
axiosInstance.interceptors.response.use((response) => {
  if (response.data.status == 405) {
    localStorage.removeItem('token')
    alert('请登录')
    router.replace({
      path: 'login',
      query: { redirect: router.currentRoute.fullPath },
    })
  }
  return response
})

Vue.prototype.axios = axiosInstance

export default axiosInstance
