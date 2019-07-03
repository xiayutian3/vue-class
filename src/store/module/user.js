const state = {
	name:'模块名'
}
const mutations = {
  SET_NAME(state,params){
    state.name = params
  }
}
const actions = {
  updateUserName({commit,state,rootState,dispatch},params){
    // rootState.appName
    dispatch('xxx','')
  },
  xxx(){

  }
}
const getters = {
  firstName(state){
    return  `${state.name}111`
  }
}
export default {
  namespaced:true,
  state,
	mutations,
	actions,
  getters
}
