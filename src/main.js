import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import VueClipboard from 'vue-clipboard2'
import 'element-ui/lib/theme-chalk/index.css'
import i18n from './language/index'

// import 'amfe-flexible'
// 导入全局样式
import '@/style/index.scss'

import { POST } from './utils/request'
import { GET } from './utils/request'

Vue.prototype.postRequest = POST
Vue.prototype.getRequest = GET

Vue.use(ElementUI)
Vue.use(VueClipboard)

// 移动端调试器
// import Vconsole from 'vconsole'
// const vConsole = new Vconsole()
// Vue.use(vConsole)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  // if (to.meta.title) {
  //   document.title = to.meta.title
  // }
  // next()
  if (localStorage.getItem('token')) {
    if (to.meta.loginRequest) {
      next({ path: '/' })
    } else {
      next()
    }
  } else {
    next()
  }
})

// 适配
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
