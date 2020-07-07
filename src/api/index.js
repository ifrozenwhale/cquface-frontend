// appfront/src/api/index.js
import Vue from 'vue'
import Axios from 'axios'
import router from '../router/index'
const axiosInstance = Axios.create({
  withCredentials: true,
})

// 通过拦截器处理csrf问题
axiosInstance.interceptors.request.use(
  (config) => {
    config.headers['X-Requested-With'] = 'XMLHttpRequest'
    const regex = /.*csrftoken=([^;.]*).*$/
    config.headers['X-CSRFToken'] = document.cookie.match(regex) === null ? null : document.cookie.match(regex)[1]
    // 添加token
    if (localStorage.getItem('token')) {
      // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.Authorization = localStorage.getItem('token')
    }
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

// http response 拦截器
axiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 返回 401 清除token信息并跳转到登录页面
          localStorage.removeItem('token')
          router.replace({
            path: 'login',
            query: { redirect: router.currentRoute.fullPath },
          })
      }
    }
    return Promise.reject(error.response.data) // 返回接口返回的错误信息
  }
)

Vue.prototype.axios = axiosInstance

export default axiosInstance
