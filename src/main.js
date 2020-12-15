import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import VueTypedJs from 'vue-typed-js'
import store from './store/store'

import Unicon from 'vue-unicons'
import {
  uniYoutube,
  uniGithub,
  uniEnvelope,
  uniLinkedin,
  uniPrint,
  uniMoon,
} from 'vue-unicons/src/icons'

Unicon.add([uniYoutube, uniGithub, uniEnvelope, uniLinkedin, uniPrint, uniMoon])
Vue.use(Unicon)

Vue.use(BootstrapVue)
Vue.use(VueTypedJs)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
