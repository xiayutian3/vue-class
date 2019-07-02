const state = {
	name:'模块名'
}
const mutations = {

}
const actions = {

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
