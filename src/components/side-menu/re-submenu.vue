<template>
  <Submenu :name="parent.meta.title">
    <template slot="title">
      <Icon :type="parent.icon" />
      {{parent.meta.title}}
    </template>
    <template v-for="item in parent.children">
      <re-submenu
        v-if="item.children"
        :key="item.meta.title"
        :name="item.meta.title"
        :parent="item"
      >
      </re-submenu>
      <MenuItem v-else :key="item.meta.title" :name="item.meta.title">
        <Icon :type="item.icon" />
        {{item.meta.title}}
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
