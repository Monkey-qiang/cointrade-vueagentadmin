import request from '../utils/request'

// 获取公告类型
export function noticeCategory(params) {
  return request({
    url: '/article/category',
    params
  })
}

// 获取公告列表
export function noticeList(params) {
  return request({
    url: '/article/list',
    params
  })
}

// 获取公告详情
export function noticeDetail(params) {
  return request({
    url: `/article/detail/${params.id}`,
    method: 'GET'
  })
}
