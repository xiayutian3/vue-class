<template>
  <ul class="a-submenu">
    <div class="a-submenu-title" @click="handleClick">
      <slot name="title"></slot>
      <span class="shrink-icon" :style="{transform:`rotate(${showChild?0:180}deg)`}">^</span>
    </div>
    <div v-show="showChild" class="a-submenu-child-box">
      <slot ></slot>
    </div>
  </ul>
</template>

<script>
  export default {
    name: "a-submenu",
    data(){
      return {
        showChild:false
      }
    },
    methods:{
      handleClick(){
        this.showChild = !this.showChild
      }
    }
  }
</script>

<style lang="less" scoped>
.a-submenu{
  margin: 0;
  padding: 0;
  list-style: none;
  &-title{
    background: lightblue;
    color: #fff;
    position: relative;
    .shrink-icon{
      position: absolute;
      top: 4px;
      right: 10px;
    }
  }
  &-child-box{
    overflow: hidden;
    padding-left: 20px;
  }
}
</style>
