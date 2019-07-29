<template>
  <div class="menu-box">
    <!--<a-menu>-->
      <!--<a-menu-item>11111</a-menu-item>-->
      <!--<a-menu-item>22222</a-menu-item>-->
      <!--<a-submenu>-->
        <!--<div slot="title">3333</div>-->
        <!--<a-menu-item>3333-11</a-menu-item>-->
        <!--<a-submenu>-->
          <!--<div slot="title">3333-22</div>-->
          <!--<a-menu-item>3333-22-11</a-menu-item>-->
          <!--<a-menu-item>3333-22-22</a-menu-item>-->
        <!--</a-submenu>-->
      <!--</a-submenu>-->
    <!--</a-menu>-->


    <!--函数递归-->
    <a-menu>
      <template v-for="(item,index) in list">
        <a-menu-item v-if="!item.children" :key="`menu_item_${index}`">{{item.title}}</a-menu-item>
        <re-submenu v-else :key="`mnu_item${index}`" :parent="item" :index="index"></re-submenu>
      </template>
    </a-menu>

  </div>
</template>

<script>
  import menuComponents from '@@/menu'
  import ReSubmenu from './re-submenu.vue'
  const {AMenu,AMenuItem,ASubmenu} = menuComponents
  export default {
    name: "menu-page",
    components:{
      AMenu,
      AMenuItem,
      ASubmenu,
      ReSubmenu
    },
    data(){
      return {
        list:[
          {title:1111},
          {title:2222},
          {
            title:3333,
            children:[
              {title:3333-1},
              {
                title:3333-2,
                children:[
                  {title:3333-2-111},
                  {title:3333-2-222},
                ]
              },
            ]
          },
        ]
      }
    }
  }
</script>

<style lang="less" scoped>
.menu-box{
  width: 300px;
  height: 400px;
}
</style>
