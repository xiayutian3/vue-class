const state = {
  hzz:'hzzName'
}
const mutations = {
  SET_NAME(state,params){
    console.log('mutations调用了',params)
    state.hzz = params
  }
}
const actions = {
  update({commit,state,rootState,dispatch},params){

  },
  set_name({commit,state},params){
    console.log('actions调用了',params)
    commit('SET_NAME',params)
  }
}
const getters = {
  myname(state){
    return `${state.hzz}-hello`
  }
}


// 没有空间命名   namespaced:true,
export default {
  // namespaced:true,
  state,
  mutations,
  actions,
  getters
}
