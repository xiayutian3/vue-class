import {routeHasExist,getRouteById,routeEqual,localSave,localRead} from '@/lib/util'
const state = {
  //
  tabList:JSON.parse(localRead('tabList') || '[]')
}

const getTabListToLocal = tabList => {
  return  tabList.map(item => {
    return {
      name: item.name,
      path: item.path,
      meta: item.meta,
      params: item.params,
      query: item.query
    }
  })
}


const mutations = {
  //
  UPDATE_ROUTER(state,route){
    if (!routeHasExist(state.tabList,route)) state.tabList.push(route)
    localSave('tabList',JSON.stringify(getTabListToLocal(state.tabList)))
  },
  REMOVE_TAB(state,index){
    state.tabList.splice(index,1)
    localSave('tabList',JSON.stringify(getTabListToLocal(state.tabList)))
  }
}

const actions = {
  handleRemove({commit,state},{id,$route}){
    return new Promise((resolve )=> {
      console.log(id)
      let route = getRouteById(id)
      console.log(route)
      let index = state.tabList.findIndex(item => {
        return routeEqual(route,item)
      })
      let len = state.tabList.length
      let nextRoute = {}
      if (routeEqual($route,state.tabList[index])){
        if (index < len - 1) nextRoute = state.tabList[index+1]
        else nextRoute = state.tabList[index-1]
      }
      const {name,params,query} = nextRoute || {name:'home'}
      commit('REMOVE_TAB',index)
      resolve({
        name,params,query
      })
    })
  }
}

export default {
  namespaced:true,
  state,
  mutations,
  actions
}
