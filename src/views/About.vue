<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!--<div> 根store：{{$store.state.appName}}</div>-->
    <!--<div> modules:{{$store.state.user.name}}</div>-->
    <!--<div> 根store：{{appName}}</div>-->
    <div> modules:{{username}}</div>
    <!--<div>name:{{name}}</div>-->
    <input type="text" v-model="inpVal">
    <div>last word : {{inpLastVal}}</div>
    <div>appNameVersion: {{appNameWithVersion}}</div>
    <div>modules中的getters：{{firstName}}</div>

  </div>
</template>
<script>
  import {mapState,mapGetters} from 'vuex'

  import state from "../../../vue-cource/src/store/state";
  // import { createNamespacedHelpers } from 'vuex'
  // const { mapState} = createNamespacedHelpers('user')
  export default {
    data(){
      return{
        inpVal:''
      }
    },
    computed:{
      // 如果模块没有开启命名空间,直接获取
      // 例如：user模块   namespaced:true,
      // ...mapGetters(['appNameWithVersion','firstName'])


      // appNameWithVersion(){
      //   return this.$store.getters.appNameWithVersion
      // },
        inpLastVal(){
          return this.inpVal.substr(-1,1)
        },

      // ...mapState('user',['name'])

      ...mapState('user',{
        username: state => state.name
      }),
      ...mapGetters(['appNameWithVersion']),
      // ...mapGetters('user',['firstName']),
      firstName(){
          return this.$store.getters['user/firstName']
      }
      // ...mapState({
      //   // 使用了createNamespacedHelpers('user'),就不能使用mapState拿得到appName了
      //   username: state => state.name,
      //   // 例如： appName: state => state.appName,
      // })


      // appName(){
      //   return this.$store.state.appName
      // },
      // username(){
      //   return this.$store.state.user.name
      // }

      //或者这样写
      // ...mapState(['appName'])

      // ...mapState({
      //   appName: state => state.appName,
      //   username: state => state.user.name
      // })

    },
    mounted(){
      console.log(this.$store.getters)
      // console.log(this.$store.state)
    }
  }
</script>
