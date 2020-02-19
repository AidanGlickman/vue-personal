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
    themeOpp: state => {
      return state.lightTheme ? 'dark' : 'light'
    },
  },
  mutations: {
    toggleTheme(state) {
      state.lightTheme = !state.lightTheme
    },
  },
  actions: {
    toggleTheme(context) {
      context.commit('toggleTheme')
    },
  },
})
