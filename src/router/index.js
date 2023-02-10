import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    component: () => import('@/layout/index'),
    meta: { title: 'common.account' },
    children: [
      {
        path: '/',
        name: 'Account',
        component: () => import('@/views/account/index')
      }
    ]
  },
  {
    path: '/invite',
    component: () => import('@/layout/index'),
    meta: { title: 'common.invitationData' },
    children: [
      {
        path: '/',
        name: 'Invite',
        component: () => import('@/views/inviteData/index')
      }
    ]
  },
  {
    path: '/award',
    component: () => import('@/layout/index'),
    meta: { title: 'common.rewardData' },
    children: [
      {
        path: '/',
        name: 'Award',
        component: () => import('@/views/awardData/index')
      }
    ]
  },
  {
    path: '/transation',
    component: () => import('@/layout/index'),
    meta: { title: 'common.transactionData' },
    children: [
      {
        path: '/',
        name: 'Transation',
        component: () => import('@/views/transationData/index')
      }
    ]
  },
  {
    path: '/dataReport',
    component: () => import('@/layout/index'),
    meta: { title: 'common.dataReport' },
    children: [
      {
        path: '/',
        name: 'DataReport',
        component: () => import('@/views/dataReport/index')
      }
    ]
  },
  {
    path: '/login',
    redirect: '/login',
    component: () => import('@/layout/index'),
    hidden: true,
    children: [
      {
        path: '/',
        name: 'Login',
        meta: {
          title: '登录',
          hidden: true
        },
        component: () => import('@/views/login/index')
      },
      {
        path: 'forgetPassword',
        name: 'ForgetPassword',
        meta: {
          title: '忘记密码',
          hidden: true
        },
        component: () => import('@/views/login/forgetPassword')
      },
      {
        path: 'newPassword',
        name: 'NewPassword',
        meta: {
          title: '忘记密码',
          hidden: true
        },
        component: () => import('@/views/login/newPassword')
      }
    ]
  },
  {
    path: '/agentPage',
    redirect: '/agentPage',
    component: () => import('@/layout/index'),
    hidden: true,
    children: [
      {
        path: '/',
        meta: { title: '代理商页面', hidden: true, loginRequest: true },
        component: () => import('@/views/agent/index'),
        name: 'AgentPage'
      },
      {
        path: 'application',
        meta: { title: '代理商页面', hidden: true, loginRequest: true },
        component: () => import('@/views/agent/application'),
        name: 'Application'
      },
      {
        path: 'verification',
        meta: { title: '代理商页面', hidden: true, loginRequest: true },
        component: () => import('@/views/agent/verification'),
        name: 'Verification'
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})

export default router
