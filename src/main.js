import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import Count from '@@/count-to'

//引入iview
import 'iview/dist/styles/iview.css';
import {
  Layout,Header,Sider,Content,Icon,Card ,Row,Col,Menu,Submenu ,MenuItem ,Tooltip,Dropdown,DropdownMenu,DropdownItem,Table ,Button,Input,Tree,Modal,Message,Form,FormItem,Slider,Select,Option,
  CheckboxGroup,Checkbox,RadioGroup,Radio,Switch
} from 'iview';


Vue.component('Layout', Layout)
Vue.component('Header',Header)
Vue.component('Sider', Sider)
Vue.component('Content',Content)
Vue.component('Icon',Icon)
Vue.component('Card',Card)
Vue.component('Row',Row)
Vue.component('Col',Col)
Vue.component('Menu',Menu)
Vue.component('Submenu',Submenu)
Vue.component('MenuItem',MenuItem)
Vue.component('Tooltip',Tooltip)
Vue.component('Dropdown',Dropdown)
Vue.component('DropdownMenu',DropdownMenu)
Vue.component('DropdownItem',DropdownItem)
Vue.component('Table',Table)
Vue.component('Button',Button)
Vue.component('Input',Input)
Vue.component('Tree',Tree)
Vue.component('Modal',Modal)
Vue.component('Message',Message)
Vue.component('Form',Form )
Vue.component('FormItem',FormItem )
Vue.component('Slider',Slider )
Vue.component('Select',Select )
Vue.component('Option',Option )
Vue.component('CheckboxGroup',CheckboxGroup )
Vue.component('Checkbox',Checkbox )
Vue.component('RadioGroup',RadioGroup )
Vue.component('Radio',Radio )
Vue.component('i-switch',Switch )










Vue.prototype.$Modal = Modal
Vue.prototype.$Message = Message
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

