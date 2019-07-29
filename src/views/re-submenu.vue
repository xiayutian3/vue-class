<template>
  <a-submenu>
    <div slot="title">{{parent.title}}</div>
    <template v-for="(item,i) in parent.children">
      <a-menu-item v-if="!item.children" :key="`mnu_item${index}_${i}`">{{item.title}}</a-menu-item>
      <re-submenu v-else :key="`mnu_item${index}_${i}`" :parent="item" :index="i"></re-submenu>
    </template>
  </a-submenu>
</template>

<script>
  import menuComponents from '@@/menu'
  const {AMenuItem,ASubmenu} = menuComponents
  export default {
    //递归组件自身必须要有name值，自己才能使用
    name: "re-submenu",
    components:{
      AMenuItem,
      ASubmenu
    },
    props:{
      parent:{
        type:Object,
        default(){
          return {}
        }
      },
      index:{
        type:Number
      }
    }
  }
</script>

<style scoped>

</style>
