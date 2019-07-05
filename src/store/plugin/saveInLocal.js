export default store => {
  //store初始化
  localStorage.clear()
  console.log('store初始化')
  if ( localStorage.state) {
    store.replaceState(JSON.parse(localStorage.state))
  }
  store.subscribe((mutation,state)=>{
//每次提交mutation
//     console.log('每次提交mutation')
    localStorage.state = JSON.stringify(state)
  })
}
