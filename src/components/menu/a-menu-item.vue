<template>
  <li class="a-menu-item">
    <slot></slot>
  </li>
</template>

<script>
  export default {
    name: "a-menu-item"
  }
</script>

<style scoped>
.a-menu-item{
  background: lightgreen;
}
</style>
