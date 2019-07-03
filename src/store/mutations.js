import Vue from 'vue'
const mutations = {
	// SET_APP_NAME(state,params){
	//   state.appName = `new app-name${params}`
	// }
  SET_APP_NAME(state,params){
    state.appName = params.appName
  },
  setNewProp(state){
    Vue.set(state,'appVersion','v2.0')
  }
}
export default mutations
