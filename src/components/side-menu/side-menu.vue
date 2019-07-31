<template>
  <div class="side-menu-wrapper">
    <slot></slot>
    <Menu v-show="!collapsed" width="auto" theme="dark" @on-select="seleFun">
      <!--//组建递归-->
      <template v-for="item in list">
        <re-submenu
          v-if="item.children"
          :key="item.title"
          :parent="item"
        >
        </re-submenu>
        <MenuItem v-else :key="item.title" :name="item.title">
          <Icon :type="item.icon" />
          {{item.title}}
        </MenuItem>
      </template>
    </Menu>

    <div v-show="collapsed">
      <template v-for="item in list">
        <re-dropdown @on-downselect="seleFun" class="outwrap" v-if="item.children" :showTitle="false" icon-color="#fff" :key="item.title" :parent="item"></re-dropdown>
        <Tooltip v-else :content="item.title" :key="item.title" placement="right">
          <a class="drop-menu-a" href="###" @click="handleClick(item.title)">
            <Icon :type="item.icon" color="#fff" size="24"></Icon>
          </a>
        </Tooltip>
      </template>
    </div>

  </div>
</template>

<script>
  import ReSubmenu from './re-submenu.vue'
  import ReDropdown from './re-dropdown.vue'
  export default {
    name: "side-menu",
    props:{
      collapsed:{
        type:Boolean,
        default: false
      },
      list:{
        type:Array,
        default:()=>[]
      }
    },
    components:{
      ReSubmenu,
      ReDropdown
    },
    methods:{
      seleFun(name){
        console.log(name)
      },
      handleClick(title){
        console.log(title)
      }
    }
  }
</script>

<style lang="less" scoped>
.side-menu-wrapper{
  width: 100%;
  .ivu-tooltip, .drop-menu-a{
    display: block;
    width: 100%;
    color: #fff;
    text-align: center;
    padding: 5px 0;
  }
  .outwrap{
    padding: 5px 0;
  }
}
</style>
