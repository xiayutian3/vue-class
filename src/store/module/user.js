import { login } from '@/api/user'


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
    // dispatch('xxx','')
  },
  login({commit},{userName,password}){
    return new Promise((resolve,reject)=>{
      login({userName,password}).then(res =>{
        if (res.code === 200 && res.data.token){
          setToken(res.data.token)
          console.log(res)
          resolve()
        }else {
          reject(new Error('错误'))
        }
      }).catch(err =>{
        console.log(err)
        reject(err)
      })
    })
  },
  logout(){
    setToken('')
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
