import Vue from 'vue'
import VueRouter from 'vue-router'
import Header from '@/components/Header.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'header',
      component: Header,
    },
  ],
})
