import axios from 'axios'
import { Toast } from 'vant'
import router from '../router'
import store from '@/store'
import { Message } from 'element-ui'
const token = ''
// const base = 'http://192.168.3.110:6240/api/'
const base = 'http://8.218.110.85:6240/api/'

const basicData = axios.create({
  baseURL: base
})

basicData.defaults.withCredentials = false
basicData.defaults.headers.common['token'] = token
basicData.defaults.headers.post['Content-Type'] =
  'application/json;charset=UTF-8' // 配置请求头

// http request拦截器 添加一个请求拦截器
basicData.interceptors.request.use(
  function(config) {
    const token = localStorage.getItem('token')
    if (token) {
      // 将token放到请求头发送给服务器,将tokenkey放在请求头中
      config.headers.token = token
      // 也能够这种写法
      // config.headers['token'] = token;
    }
    return config
  },
  function(error) {
    Toast.fail('请求超时')
    // Do something with request error
    return Promise.reject(error)
  }
)

// 添加一个响应拦截器
basicData.interceptors.response.use(
  function(response) {
    // debugger
    if (response.data.status == -1 || response.data.status == -2) {
      Message.warning(response.data.msg)
      localStorage.clear()
      store.commit('setToken', '')
      router.replace({ path: '/login' })
      // Message.warning(response.data.response)
      // router.replace({ path: '/login' })
      // debugger
      // // console.log(response)
      // if (
      //   response.data.msg == '未登录' ||
      //   response.data.code == 10001 ||
      //   response.data.code == 10002
      // ) {
      //   try {
      //     Message.warning('账号异常需要重新登录')
      //     localStorage.clear()
      //     store.commit('setToken', '')
      //     router.replace({ path: '/login' })
      //   } catch (error) {
      //     return false
      //   }
      // } else if (response.data.code != 2000) {
      //   Message.warning(response.data.msg)
      // }
    } else if (response.data.code != 2000) {
      Message.warning(response.data.msg)
    }
    return response
  },
  function(error) {
    return Promise.reject(error)
  }
)

// 通用方法
export const POST = (url, params) => {
  // const getTimestamp = new Date().getTime();
  // return basicData.post(`${base}${url}?timer=${getTimestamp}`, params).then(res => res.data)
  return basicData.post(`${base}${url}`, params).then(res => res.data)
}

export const GET = (url, params) => {
  // const getTimestamp = new Date().getTime();
  // return basicData.get(`${base}${url}?timer=${getTimestamp}`, { params: params }).then(res => res.data)
  return basicData
    .get(`${base}${url}`, { params: params })
    .then(res => res.data)
}

export const PUT = (url, params) => {
  return basicData.put(`${base}${url}`, params).then(res => res.data)
}

export const DELETE = (url, params) => {
  return basicData
    .delete(`${base}${url}`, { params: params })
    .then(res => res.data)
}

export const PATCH = (url, params) => {
  return basicData.patch(`${base}${url}`, params).then(res => res.data)
}

export default basicData
