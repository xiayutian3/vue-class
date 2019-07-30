<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="handleout"></button>
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
