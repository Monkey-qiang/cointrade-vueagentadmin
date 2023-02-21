import request from '../utils/request'

// 代理商注册
export function agentRegister(data) {
  return request({
    url: '/agent/register',
    method: 'post',
    data
  })
}

//  邮箱验证
export function agentEmail(data) {
  return request({
    url: '/agent/register/verification/email',
    method: 'post',
    data
  })
}

//  发送验证码
export function agentRegisterSendcode(data) {
  return request({
    url: '/agent/register/sendcode',
    method: 'post',
    data
  })
}

// 更改密码邮箱验证码校验
export function checkresetpasswd(data) {
  return request({
    url: '/agent/checkresetpasswd',
    method: 'post',
    data
  })
}
