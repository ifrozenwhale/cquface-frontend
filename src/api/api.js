// appfront/src/api/api.js
import axiosInstance from './index'

const axios = axiosInstance

export const getTests = () => {
  return axios.get(`http://localhost:8000/api/test/`)
}
export const getTestById = (id) => {
  return axios.get('http://localhost:8000/api/test/id/' + id)
}
export const postTest = (id, name, major) => {
  return axios.post(`http://localhost:8000/api/test`, { id: id, name: name, major: major })
}

// login
export const login = (account, password) => {
  return axios.post('http://localhost:8000/api/login', { account: account, password: password })
}

// register
export const register = (account, username, password, email, major) => {
  return axios.post('http://localhost:8000/api/user', {
    account: account,
    username: username,
    password: password,
    email: email,
    major: major,
  })
}
export const logout = () => {
  return axios.get('http://localhost:8000/api/logout')
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
