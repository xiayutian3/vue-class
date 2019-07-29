<template>
  <div class="a-menu">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "a-menu"
  }
</script>

<style lang="less"  scoped>
.a-menu {
  *{
    margin: 0;
    padding: 0;
    list-style: none;
  }
  ul{
    margin: 0;
    padding: 0;
    list-style: none;
  }
}
</style>
