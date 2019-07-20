<template>
  <div class="split-pane-con">
    <!--<SplitPane/>-->

    <!--<split-pane :value="offset" @input="handleInput"/>-->
    <!--也可以这么写-->
    <!--<split-pane v-model="offset"/>-->

    <!--还可以这么写-->
    <split-pane :value.sync="offset">
      <div slot="left">我是左边的内容</div>
      <div slot="right">我是右边的内容</div>
    </split-pane >
  </div>
</template>

<script>
  import SplitPane from '@@/split-pane'
  // import SplitPane from '../components/split-pane'
  export default {
    data(){
      return{
        offset:0.8
      }
    },
    components:{
      SplitPane
    },
    methods:{
      handleInput(value){
        this.offset = value
      }
    }
  }
</script>

<style lang="less" scoped>
  .split-pane-con{
    width: 400px;
    height: 200px;
    background: papayawhip;
  }
</style>
