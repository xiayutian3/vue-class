<template>
  <div>
    <h3>我是hzz页面 test vuex</h3>
    <div>mapState:{{hzz}}</div>
    <div>mapGetters:{{myname}}</div>
    <button @click="mutFun">mapMutations调用了</button>
    <button @click="actFun">mapActions调用了</button>
    <div>这个是没有在模块里边的数据：{{appName}}</div>
  </div>
</template>

<script>
  import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
  import state from "../../../vue-cource/src/store/state";
  export default {
    name: "test-vuex",
    mounted(){
      console.log(this.$store.state)
    },
    computed:{
      // 如果没有开启 模块的空间命名 namespaced:true,  就不可以 ...mapState('noname',['hzz'])
      // 但是可以这样  ...mapState({ hzz: state => state.noname.hzz }),
      // ...mapState('noname',['hzz']),
      ...mapState({
        hzz: state => state.noname.hzz
      }),
      ...mapGetters(['myname']),
      ...mapState(['appName'])
    },
    methods:{
      ...mapMutations(['SET_NAME']),
      ...mapActions(['set_name']),
      mutFun(){
        this.SET_NAME('mutName')
      },
      actFun(){
        //没有 模块空间名的话  可以直接调用模块里的方法 this.$store.dispatch('set_name',1111)
        //如果 开启空间命名   this.$store.dispatch('模块名/set_name',1111)
        this.$store.dispatch('set_name',1111)
        this.set_name('actName')
      }

    }
  }
</script>

<style lang="less">

</style>
