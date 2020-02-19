import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import VueTypedJs from 'vue-typed-js'
import store from './store/store'

import Unicon from 'vue-unicons'
import {
  uniMediumM,
  uniGithub,
  uniEnvelope,
  uniLinkedin,
  uniPrint,
} from 'vue-unicons/src/icons'

Unicon.add([uniMediumM, uniGithub, uniEnvelope, uniLinkedin, uniPrint])
Vue.use(Unicon)

Vue.use(BootstrapVue)
Vue.use(VueTypedJs)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
