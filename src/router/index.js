import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/layout/index'),
    meta: { title: '账户' },
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
    meta: { title: '邀请数据' },
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
    meta: { title: '奖励数据' },
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
    meta: { title: '交易数据' },
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
    meta: { title: '数据报表' },
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
  }
]

const router = new VueRouter({
  routes
})

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})

export default router
