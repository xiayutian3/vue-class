<template>
  <Submenu :name="parent.title">
    <template slot="title">
      <Icon :type="parent.icon" />
      {{parent.title}}
    </template>
    <template v-for="item in parent.children">
      <re-submenu
        v-if="item.children"
        :key="item.title"
        :name="item.title"
        :parent="item"
      >
      </re-submenu>
      <MenuItem v-else :key="item.title" :name="item.title">
        <Icon :type="item.icon" />
        {{item.title}}
      </MenuItem>
    </template>
  </Submenu>
</template>

<script>
  export default {
    name: "re-submenu",
    props:{
      parent:{
        type:Object,
        default:()=>({})
      }
    }
  }
</script>

<style scoped>

</style>
