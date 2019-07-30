import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../views/layout.vue'
const Countto = () => import('@/views/count-to.vue')
// import Countto from '@/views/count-to.vue'

Vue.use(Router)

const HAS_LOGINED = false

// router.beforeEach((to,from,next)=>{
//   if (to.name !== 'login'){
//     if (HAS_LOGINED) next()
//     else next({name:'login'})
//   }else {
//     if(HAS_LOGINED) next({name:'login'})
//     else next()
//   }
// })





export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children:[
        {
          path:'home',
          name:'Home',
          component:Home
        }
      ]
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
    },
    {
      path: '/menu_page',
      name: 'menu_page',
      component: () => import('../views/menu-page.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login.vue')
    }
  ]
})
