<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png">-->
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <!--<button @click="handleout"></button>-->

    <Row>
      <Col ></Col>
    </Row>
    <Row :gutter="10">
      <Col span="12"></Col>
      <Col span="12"></Col>
    </Row>
    <Row :gutter="10" class="blue">
      <Col span="4" offset="1"></Col>
      <Col span="4" push="1"></Col>
      <Col span="4"></Col>
    </Row>
    <Row :gutter="10" class="yellow">
      <Col :lg="6" :md="12" :sm="24"></Col>
      <Col :lg="6" :md="12" :sm="24"></Col>
      <Col :lg="6" :md="12" :sm="24"></Col>
      <Col :lg="6" :md="12" :sm="24"></Col>
    </Row>
    <Row :gutter="10" class="yellow">
      <Col :md="6"></Col>
      <Col :md="6"></Col>
      <Col :md="6"></Col>
      <Col :md="6"></Col>
    </Row>


  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {mapActions} from 'vuex'
export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods:{
    ...mapActions('user',['logout']),
    handleout(){
      this.logout()
      this.$router.push('/')
    }
  }
}
</script>
<style lang="less">
.ivu-col{
  height: 50px;
  margin-top: 10px;
  background: pink;
  background-clip: content-box;
}
  .blue{
    .ivu-col{
      background: lightseagreen;
    }
  }
  .yellow{
    .ivu-col{
      background: greenyellow;
      background-clip: content-box;
    }
  }
</style>
