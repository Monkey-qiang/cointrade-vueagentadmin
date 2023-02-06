import axios from 'axios'
// import router from '../router/index'
import { Toast } from 'vant'

const token = ''
// const base = 'http://8.218.110.85/api/'
const base = 'http://192.168.3.110:6236/api/'

const basicData = axios.create({
  baseURL: base
})

basicData.defaults.withCredentials = false
basicData.defaults.headers.common['token'] = token
basicData.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'// 配置请求头

// http request拦截器 添加一个请求拦截器
basicData.interceptors.request.use(function(config) {
  const token = localStorage.getItem('token')

  if (token) {
    // 将token放到请求头发送给服务器,将tokenkey放在请求头中
    config.headers.token = token
    // 也能够这种写法
    // config.headers['token'] = token;
  }
  return config
}, function(error) {
  Toast.fail('请求超时')
  // Do something with request error
  return Promise.reject(error)
})

// 添加一个响应拦截器
basicData.interceptors.response.use(function(response) {
  if (response.data && response.data.code) {
    // if (response.data.message === 'token失效' || response.data.message === '请求头中没有token') {
    //     //未登陆
    //     Toast.fail("登陆信息已失效，请从新登陆");
    //     router.push('/login');
    // }
    if (response.data.code === -1) {
      Toast.fail('请求失败')
    }
  }
  return response
}, function(error) {
  Toast.fail('请检查你的网络连接')
  return Promise.reject(error)
})

// 通用方法
export const POST = (url, params) => {
  // const getTimestamp = new Date().getTime();
  // return basicData.post(`${base}${url}?timer=${getTimestamp}`, params).then(res => res.data)
  return basicData.post(`${base}${url}`, params).then(res => res.data)
}

export const GET = (url, params) => {
  // const getTimestamp = new Date().getTime();
  // return basicData.get(`${base}${url}?timer=${getTimestamp}`, { params: params }).then(res => res.data)
  return basicData.get(`${base}${url}`, { params: params }).then(res => res.data)
}

export const PUT = (url, params) => {
  return basicData.put(`${base}${url}`, params).then(res => res.data)
}

export const DELETE = (url, params) => {
  return basicData.delete(`${base}${url}`, { params: params }).then(res => res.data)
}

export const PATCH = (url, params) => {
  return basicData.patch(`${base}${url}`, params).then(res => res.data)
}

export default basicData