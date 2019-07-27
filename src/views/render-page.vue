<template>
  <div>
    <!--<ul @click="handleClick">-->
      <!--<li @click.stop="handleClick" v-for="(item,index) in list" :key="index">{{item.name}}</li>-->
    <!--</ul>-->

    <!--<list :list="list" :style="{color:'yellow'}" :render="renderFun"/>-->


    <list :list="list" :style="{color:'yellow'}">
      <count-to slot="aa" slot-scope="count" :end-val="count.numname" ></count-to>
    </list>
  </div>
</template>

<script>
  import List from '@@/list'
  import CountTo from '@@/count-to'
  export default {
    name: "render-page",
    data(){
      return{
        list:[
          // {name:'lison'},
          // {name:'lili'}
          {name:100},
          {name:45}
        ]
      }
    },
    methods:{
      handleClick(event){
        console.log(event);
      },
      // renderFun(h,name){
      //   return h('i',{
      //     style:{
      //       color:'pink'
      //     }
      //   },name)
      // }

      //jsx语法
      renderFun(h,name){
        return (
          // <i on-click={this.jsxFun} style={{color:'pink'}}>{name} </i>
        <CountTo nativeOn-click={this.jsxFun} on-on-animation-end={this.endFun} endVal={name} style={{color:'pink'}}></CountTo>
        )
      },
      jsxFun(event){
        console.log(event)
      },
      endFun(){
          console.log('end')
      }
    },
    components:{
      List,
      CountTo
    }
  }
</script>

<style scoped>

</style>
