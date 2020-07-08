// app front/src/api/api.js
import axiosInstance from './index'
// 使用封装了ajax请求方式的axios进行API调用
const axios = axiosInstance

export { login, register, logout, share}

export const getTests = () => {
  return axios.get(`http://localhost:8000/api/test/`)
}

export const getTestById = (id) => {
  return axios.get('http://localhost:8000/api/test/id/' + id)
}
export const postTest = (id, name, major) => {
  return axios.post(`http://localhost:8000/api/test`, { id: id, name: name, major: major })
}

/**
 * 登录
 * POST
 * @param {string} account 账号
 * @param {string} password 密码
 * @returns 登录请求状态
 */
const login = (account, password) => {
  return axios.post('http://localhost:8000/api/login', { account: account, password: password })
}

// register
/**
 * 用户注册
 *
 * POST
 * @param {string} account 账号
 * @param {string} username 用户名
 * @param {string} password 密码
 * @param {string} email 邮箱
 * @param {string} major 专业
 * @returns 注册请求状态
 */
const register = (account, username, password, email, major) => {
  return axios.post('http://localhost:8000/api/add_user', {
    account: account,
    username: username,
    password: password,
    email: email,
    major: major,
  })
}
// ok

/**
 * 退出登录
 * GET
 * @returns 退出登录请求状态
 */
const logout = () => {
  return axios.get('http://localhost:8000/api/logout')
}

// start analysis
export const getReport = (image, account) => {
  return axios.post('http://localhost:8000/api/recognition', {
    image: image,
    account: account,
  })
}
// ok


// share
const share = (photoId, publicShare, content) => {
  return axios.post('http://localhost:8000/api/share', {
    photo_id: photoId,
    public: publicShare,
    content: content,
  })
}



export const checkLogin = () => {
  return axios.get('http://localhost:8000/api/login/status')
}

// save photo
export const savePhoto = (base64) => {
  return axios.post('http://localhost:8000/api/user/photo', {
    base: base64,
  })
}

export const getUserByAccount = (account) => {
  return axios.get('http://localhost:8000/api/user/account/' + account)
}

