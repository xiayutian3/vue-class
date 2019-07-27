<template>
  <div>
    <ul>
      <!--//@mousemove.prevent 可以阻止鼠标选中-->
      <li @mousemove="handleMove" v-for="(item,index) in list" :key="index">
        <!--<span v-if="!render">{{item.name}} </span>-->
        <!--<render-dom v-else :render-fun="render" :name="item.name"></render-dom>-->


        <slot name="aa" :numname="item.name"></slot>
        <slot :numname="item.name"></slot>
      </li>
    </ul>
  </div>
</template>

<script>
  //函数式组件
  import RenderDom from '@@/render-dom'
  export default {
    name: "list",
    props:{
      list:{
        type:Array,
        default(){
          return []
        }
      },
      render:{
        type: Function,
        default(){
          return {}
        }
      }
    },
    components:{
      RenderDom
    },
    methods:{
      handleMove(event){
        //阻止鼠标的默认行为  比如选中文字
       event.preventDefault()
      }
    }
  }
</script>

<style scoped>

</style>
