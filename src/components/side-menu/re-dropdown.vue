<template>
  <Dropdown class="ddown" placement="right-start" @on-click="slectDown">
    <a class="drop-menu-aa" href="###" :class="showTitle?'no-center':''">
      <Icon :type="parent.icon" :color="iconColor" size="24"></Icon>
      <span :style="{color: iconColor}" v-if="showTitle">{{parent.title}}</span>
    </a>
    <DropdownMenu slot="list">
      <template v-for="item in parent.children">
        <re-dropdown v-if="item.children" :key="item.title" :parent="item"></re-dropdown>
        <DropdownItem  v-else :key="item.title"  :name="item.title">
          <Icon :type="parent.icon" color="#515a6e" size="24"></Icon>
          {{item.title}}
        </DropdownItem>
      </template>
    </DropdownMenu>
  </Dropdown>
</template>

<script>
  export default {
    name: "re-dropdown",
    props:{
      parent:{
        type:Object,
        default:() =>({})
      },
      iconColor:{
        type:String,
        default:'#515a6e'
      },
      showTitle:{
        type:Boolean,
        default:true
      }
    },
    created(){
      // console.log("iconColor",this.iconColor)
    },
    methods:{
      slectDown(title){
        //只打印第一级的，因为第一级是 false, 因为组件是递归嵌套
        if(!this.showTitle) this.$emit('on-downselect',title)
      }
    }
  }
</script>

<style lang="less" scoped>
  .ddown{
    display: block;
  }
  .drop-menu-aa{
    display: block;
    width: 100%;
    color: #fff;
    text-align: center;
    padding: 5px 0;
  }
  .no-center{
    position: relative;
    margin-left: -13px;
  }
</style>
