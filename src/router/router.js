import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
const Countto = () => import('@/views/count-to.vue')
// import Countto from '@/views/count-to.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
      path: '/countto',
      name: 'Countto',
      component: Countto
    },
    {
      path: '/split-pane',
      name: 'split-pane',
      component: () => import('../views/split-pane.vue')
    },
    {
      path: '/render_page',
      name: 'render_page',
      component: () => import('../views/render-page.vue')
    }
  ]
})
