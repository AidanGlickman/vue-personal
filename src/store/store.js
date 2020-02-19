import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lightTheme: false,
  },
  getters: {
    textType: state => {
      return state.lightTheme ? 'light' : 'dark'
    },
  },
  mutations: {
    changeTheme(state) {
      state.lightTheme = !state.lightTheme
    },
  },
})
