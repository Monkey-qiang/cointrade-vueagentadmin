import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

// 引入各个语言配置文件
import zh from './language/local_zh'
import en from './language/local_en'

// 引入element的语言包
import locale from 'element-ui/lib/locale'
import enLocale from 'element-ui/lib/locale/lang/en'
import cnLocale from 'element-ui/lib/locale/lang/zh-CN'

const i18n = new VueI18n({
  locale: localStorage.getItem('lang') || 'zh', // set locale
  messages: {
    'zh': {
      ...cnLocale,
      ...zh
    },
    'en': {
      ...enLocale,
      ...en
    }
  } // set locale messages
})

locale.i18n((key, value) => i18n.t(key, value))
export default i18n
