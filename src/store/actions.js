import {getAppName} from '@/api/app'

const actions = {
	// updateAppName({commit}){
  //   getAppName().then(res => {
  //     // console.log(res);
  //     console.log('action',res.info.appName)
  //     const {code,info:{appName}} = res
  //     commit('SET_APP_NAME',{appName})
  //   } ).catch(err=>{
  //     console.log(err)
  //   })
  // }

  //使用async/await处理
  async updateAppName({commit}){
    try {
      const {code,info:{appName}} = await getAppName()
      commit('SET_APP_NAME',{appName})
    }catch (e) {
      console.log(e)
    }

  }
}
export default actions
