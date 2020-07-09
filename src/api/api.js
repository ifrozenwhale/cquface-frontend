// app front/src/api/api.js
import axiosInstance from './index'
// 使用封装了ajax请求方式的axios进行API调用
const axios = axiosInstance

export {
  login,
  register,
  logout,
  share,
  getMyInfo,
  getMyHead,
  updateHead,
  updateInfo,
  getSharesByAccount,
  deletePhoto,
  showFans,
  showFollows,
  getFavorites,
  getFanFollowCollectNum,
  getDiscover,
  getReportDetail,
  star,
  commentAPI,
}

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
// o
// share
const share = (photoId, publicShare, content) => {
  return axios.post('http://localhost:8000/api/share', {
    photo_id: photoId,
    public: publicShare,
    content: content,
  })
}

const getMyInfo = (account) => {
  return axios.post('http://localhost:8000/api/get_my_info', {
    account: account,
  })
}

const getMyHead = (account) => {
  return axios.get('http://localhost:8000/api/get_my_portrait/' + account)
}

const updateHead = (account, portrait) => {
  return axios.post('http://localhost:8000/api/update_my_portrait', {
    account: account,
    portrait: portrait,
  })
}

const updateInfo = (account, nickname, signature, gender, email, QQ, city, age) => {
  return axios.post('http://localhost:8000/api/update_my_info', {
    account: account,
    nickname: nickname,
    signature: signature,
    gender: gender,
    email: email,
    QQ: QQ,
    city: city,
    age: age,
  })
}

const getSharesByAccount = (account, each, page) => {
  return axios.get('http://localhost:8000/api/shares/account/' + account, {
    params: {
      each: each,
      page: page,
    },
  })
}

const deletePhoto = (photoId) => {
  return axios.delete('http://localhost:8000/api/share/photo/' + photoId)
}

// showFans
const showFans = (account) => {
  return axios.get('http://localhost:8000/api/showFans/' + account)
}

// showFollows
const showFollows = (account) => {
  return axios.get('http://localhost:8000/api/showFollows/' + account)
}

// get_favorites
const getFavorites = (account) => {
  return axios.get('http://localhost:8000/api/get_favorites/' + account)
}

const getFanFollowCollectNum = (account) => {
  return axios.get('http://localhost:8000/api/fanFollowCollect/' + account)
}

const star = (user_id, photo_id) => {
  return axios.post(`http://127.0.0.1:8000/api/star`, {
    user_id: user_id,
    photo_id: photo_id,
  })
}

const commentAPI = (user_id, photo_id, comment_text) => {
  return axios.post(`http://127.0.0.1:8000/api/comment`, {
    user_id: user_id,
    photo_id: photo_id,
    comment_text: comment_text,
  })
}

const getDiscover = (account, share_num) => {
  return axios.get('http://127.0.0.1:8000/api/shares_random/' + account + '/' + share_num)
}

const getReportDetail = (user_id, photo_id, user_now) => {
  return axios.get('http://127.0.0.1:8000/api/share_info/' + user_id + '/' + photo_id + '/' + user_now)
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
