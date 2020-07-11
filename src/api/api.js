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
  getOtherInfo,
  showOthersShared,
  getUserId,
  follow,
  getReport,
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
const logout = (account) => {
  return axios.post('http://localhost:8000/api/logout', {
    account: account,
  })
}

/**
 * 分享报告
 *
 * @param {string} account 账号
 * @param {string} photoId 照片id
 * @param {boolean} publicShare 照片是否为public
 * @param {string} content 分享内容
 * @returns
 */
const share = (account, photoId, publicShare, content) => {
  return axios.post('http://localhost:8000/api/share', {
    account: account,
    photo_id: photoId,
    public: publicShare,
    content: content,
  })
}
/**
 * 得到个人信息
 *
 * @param {*} account 账号
 * @returns
 */
const getMyInfo = (account) => {
  return axios.post('http://localhost:8000/api/get_my_info', {
    account: account,
  })
}
/**
 * 得到头像
 *
 * @param {*} account 账号
 * @returns
 */
const getMyHead = (account) => {
  return axios.get('http://localhost:8000/api/get_my_portrait/' + account)
}
/**
 * 上传头像
 *
 * @param {*} account 账号
 * @param {*} portrait 头像 base64
 * @returns
 */
const updateHead = (account, portrait) => {
  return axios.post('http://localhost:8000/api/update_my_portrait', {
    account: account,
    portrait: portrait,
  })
}
/**
 * 更新用户信息
 *
 * @param {*} account
 * @param {*} nickname
 * @param {*} signature
 * @param {*} gender
 * @param {*} email
 * @param {*} QQ
 * @param {*} city
 * @param {*} age
 * @returns
 */
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
/**
 *根据账号得到分享记录
 *
 * @param {*} account
 * @param {*} each
 * @param {*} page
 * @param {*} account_login
 * @returns
 */
const getSharesByAccount = (account, each, page, account_login) => {
  return axios.get('http://localhost:8000/api/shares/account/' + account, {
    params: {
      each: each,
      page: page,
      account_login: account_login,
    },
  })
}
/**
 *删除照片报告
 *
 * @param {*} photoId
 * @param {*} account
 * @returns
 */
const deletePhoto = (photoId, account) => {
  return axios.post('http://localhost:8000/api/share/photo/' + photoId, {
    account: account,
  })
}

/**
 * 显示粉丝列表
 *
 * @param {*} account
 * @returns
 */
const showFans = (account) => {
  return axios.get('http://localhost:8000/api/show_fans/' + account)
}

/**
 * 显示关注列表
 * @param {*} account
 * @returns
 */
const showFollows = (account) => {
  return axios.get('http://localhost:8000/api/show_follows/' + account)
}

/**
 * 得到收藏
 *
 * @param {*} account
 * @returns
 */
const getFavorites = (account) => {
  return axios.get('http://localhost:8000/api/favorites/' + account)
}
/**
 * 得到粉丝、收藏、关注数
 *
 * @param {*} account
 * @returns
 */
const getFanFollowCollectNum = (account) => {
  return axios.get('http://localhost:8000/api/fan_follow_collect/' + account)
}
/**
 * 收藏
 *
 * @param {*} account
 * @param {*} photo_id
 * @returns
 */
const star = (account, photo_id) => {
  return axios.post(`http://127.0.0.1:8000/api/star`, {
    account: account,
    photo_id: photo_id,
  })
}
/**
 * 评论
 * @param {*} user_id
 * @param {*} photo_id
 * @param {*} comment_text
 */
const commentAPI = (user_id, photo_id, comment_text) => {
  return axios.post(`http://127.0.0.1:8000/api/comment`, {
    user_id: user_id,
    photo_id: photo_id,
    comment_text: comment_text,
  })
}
/**
 * 得到发现页
 *
 * @param {*} account
 * @param {*} share_num
 * @returns
 */
const getDiscover = (account, share_num) => {
  return axios.get('http://127.0.0.1:8000/api/shares_random/' + account + '/' + share_num)
}
/**
 * 得到报告详情
 *
 * @param {*} user_id
 * @param {*} photo_id
 * @param {*} user_now
 * @returns
 */
const getReportDetail = (user_id, photo_id, user_now) => {
  return axios.get('http://127.0.0.1:8000/api/share_info/' + user_id + '/' + photo_id + '/' + user_now)
}
/**
 *得到他人信息
 *
 * @param {*} account
 * @param {*} accountLogin
 * @returns
 */
const getOtherInfo = (account, accountLogin) => {
  return axios.get('http://localhost:8000/api/get_other_info/' + account, {
    params: {
      account_login: accountLogin,
    },
  })
}
/**
 * 显示他人分享的
 *
 * @param {*} account
 * @returns
 */
const showOthersShared = (account) => {
  return axios.get('http://localhost:8000/api/login/show_others_shared' + account)
}
/**
 * 得到用户ID
 *
 * @param {*} account
 * @returns
 */
const getUserId = (account) => {
  return axios.get('http://localhost:8000/api/get_user_id/' + account)
}
/**
 * 关注
 *
 * @param {*} account
 * @param {*} accountOther
 * @returns
 */
const follow = (account, accountOther) => {
  return axios.post('http://localhost:8000/api/follow_and_unfollow', {
    account: account,
    account_other: accountOther,
  })
}

/**
 * 得到分析报告
 *
 * @param {*} image
 * @param {*} account
 * @returns
 */
const getReport = (image, account) => {
  return axios.post('http://localhost:8000/api/recognition', {
    image: image,
    account: account,
  })
}
