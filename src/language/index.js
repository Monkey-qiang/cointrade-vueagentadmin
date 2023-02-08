import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: localStorage.getItem('lang') || 'zh', // set locale
  messages: {
    'zh': require('./language/local_zh'),
    'en': require('./language/local_en')
  } // set locale messages
})

export default i18n
