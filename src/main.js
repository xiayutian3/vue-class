import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import Count from '@@/count-to'

Vue.config.productionTip = false

const handleClick = (event)=>{
  console.log(event)
  event.stopPropagation()
}

let list = [{name:'lison'},{name:'lili'}]
const getliEleArr = (h) => {
  return list.map((item ,index)=> h('li',{
    on:{
      'click':handleClick
    },
    key: index
  },item.name))
}

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')

// new Vue({
//   router,
//   store,
//   render: h => h('div',{
//     attrs:{
//       id:'food'
//     },
//     style:{
//       color:'red'
//     }
//   },'hello')
// }).$mount('#app')

// new Vue({
//   router,
//   store,
//   render: h => h(Count,{
//     // 'class':'food',
//     'class':['foods','asd'],
//     // 'class':{
//     //   food1:true,
//     //   bar: false
//     // },
//     attrs:{},
//     style:{},
//     props:{
//       endVal:100
//     },
//     // domProps:{
//     //   innerHTML:'123'
//     // },
//     on:{
//       'on-animation-end':()=>{
//         console.log('animation-end')
//       }
//     },
//     nativeOn:{
//       'click':()=>{
//         console.log('click')
//       }
//     },
//     directives:[],
//     scopedSlots:{},
//     slot:'',
//     key:'',
//     ref:''
//   })
// }).$mount('#app')


new Vue({
  router,
  store,
  // render: h => h('div','123')
  // render: h => h('div',[
  //   h('span','45'),
  //   h('span','45')
  // ])
  render: h => h(App)
  // render:  h => h('div',[
  //   h('ul',{
  //     on:{
  //       'click':handleClick
  //     }
  //   },getliEleArr(h))
  // ])
}).$mount('#app')

