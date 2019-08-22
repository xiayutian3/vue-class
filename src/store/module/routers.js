// 权限控制：（用户等级不一样，所访问的页面也不一样）
//   动态加载路由（就是 动态的修改路由列表）

// 例如：
// routes  不需要权限也能访问的路由   routerMap  需要权限访问的路由
import { routes , routerMap} from 'xxxx'

const state = {
  routers:routes,
  hasGetRules:false //获取用户权限，获取了就置位true
}
const mutations = {
  // 动态合并路由列表
  CONCAT_ROUTES(state,routerList){
    state.routers = routerList.concat(state.routers)
    state.hasGetRules = true
  }
}

// rules 返回例如  page:{home:true,hules:true,sbhg:false}
const actions = {
  concatRoutes({commit},rules){
    return new Promise((resolve,reject) => {
      try {
        let routerList = []
        if (Object.entries(rules).every(item => item[1])){
          routerList = routerMap
        }else {
          //不然就用递归的方法筛选
          routerList = getAccesRouterList(routerMap,rules)
        }
        commit('CONCAT_ROUTES',routerList)
        resolve(state.routerList)
      }catch (e) {
        reject(e)
      }
    })
  }
}

// 路由递归的方法筛选
let getAccesRouterList = (routes,rules) => {
  return routes.filter(item => {
    if (rules[item.name]){
      if (item.children) item.children =  getAccesRouterList(item.children,rules)
      return true
    } else return false
  })
}

export default {
  namespaced:true,
  state,
  mutations,
  actions
}
