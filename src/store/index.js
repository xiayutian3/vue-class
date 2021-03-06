import Vue from 'vue'
import Vuex from 'vuex'
import state from './store'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import user from './module/user'
// import routers from './module/routers'
import noname from './module/noname'
import tabnav from './module/tabnav'
import saveInLocal from './plugin/saveInLocal'

Vue.use(Vuex)

//注意注册的时候  一定要叫  state  ，不能是其他，不然没有数据，也不报错，我也是看了很久
export default new Vuex.Store({
  strict:process.env.NODE_ENV == 'development',
  state,
  mutations,
  actions,
  getters,
  modules:{
	  user,
    noname,
    tabnav
    // routers
  },
  // plugins:[saveInLocal]
})
