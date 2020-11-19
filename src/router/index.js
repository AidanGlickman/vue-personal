import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home.vue'
import Resume from '@/components/Resume.vue'
import Portfolio from '@/components/Portfolio.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/resume',
      name: 'resume',
      component: Resume,
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio,
    },
  ],
})
