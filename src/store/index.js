import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    areaCode: '',
    token: localStorage.getItem('token')
  },
  mutations: {
    setToken(state, data) {
      state.token = data
    }
  },
  actions: {},
  modules: {}
})
