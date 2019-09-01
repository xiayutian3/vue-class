import Vue from 'vue'
import store from '@/store'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../views/layout.vue'
const Countto = () => import('@/views/count-to.vue')
// import Countto from '@/views/count-to.vue'

import clonedeep from 'clonedeep'

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








//做权限控制，动态路由使用
// router.beforeEach((to,from,next) => {
//   const token = getToken()
//   if (token){
//     if (!store.state.routers.hasGetRules) {
//       //调接口，判断用户权限 ，获取用户可以访问的列表，然后在合成router列表
//       store.dispatch('authorrization').then(rules => {
//         store.dispatch('concatRoutes',rules).then(routers => {
//           //路由实例上的方法  合并路由
//           Router.addRoutes(clonedeep(routers))
//           // 防止路由没装载完，第二个替换
//           next({...to, replace:true})
//         }).catch(()=>{
//           next({name:'login'})
//         })
//       })
//     }else{
//       next()
//     }
//   } else {
//     if (to.name === 'login') next()
//     else next({name:'login'})
//   }
// })





export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      meta:{
        title:'主页'
      },
      children:[
        {
          path:'home',
          name:'Home',
          component:Home,
          meta:{
            title:'首页'
          }
        },
        {
          path:'table',
          name:'table',
          meta:{
            title:'table'
          },
          component:() => import('../views/table.vue')
        },
        {
          path: 'folder_tree',
          name: 'folder_tree',
          meta:{
            title:'folder_tree'
          },
          component: () => import('../views/folder-tree.vue')
        },
        {
          path: 'params/:id',
          name: 'params',
          meta:{
            title:'params'
          },
          component: () => import('../views/params.vue')
        },
      ]
    },
    {
      path: '/about',
      name: 'about',
      meta:{
        title:'about'
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
      path: '/countto',
      name: 'Countto',
      meta:{
        title:'countto'
      },
      component: Countto
    },
    {
      path: '/split-pane',
      name: 'split-pane',
      meta:{
        title:'split-pane'
      },
      component: () => import('../views/split-pane.vue')
    },
    {
      path: '/render_page',
      name: 'render_page',
      meta:{
        title:'render_page'
      },
      component: () => import('../views/render-page.vue')
    },
    {
      path: '/menu_page',
      name: 'menu_page',
      meta:{
        title:'menu_page'
      },
      component: () => import('../views/menu-page.vue')
    },
    {
      path: '/login',
      name: 'login',
      meta:{
        title:'login'
      },
      component: () => import('@/views/login.vue')
    },
    {
      path: '/test_vuex',
      name: 'test_vuex',
      meta:{
        title:'test_vuex'
      },
      component: () => import('@/views/test-vuex.vue')
    },
    {
      path: '/form',
      name: 'form',
      meta:{
        title:'form'
      },
      component: () => import('@/views/form.vue')
    },
    {
      path: '/forming',
      name: 'forming',
      meta:{
        title:'forming'
      },
      component: () => import('@/views/forming.vue')
    },
    {
      path: '/icon_page',
      name: 'icon_page',
      meta:{
        title:'icon_page'
      },
      component: () => import('@/views/icon_page.vue')
    },
    {
      path: '/optimize',
      name: 'optimize',
      meta:{
        title:'optimize'
      },
      component: () => import('@/views/optimize.vue')
    }
  ]
})
