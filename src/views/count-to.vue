<template>
  <div>
    <count-to :end-val="endVal"  ref="countTo" @on-animation-end="animationEnd">
      <span slot="left">总金额：</span>
      <span slot="right">我是尾部</span>
    </count-to>
    <button @click="getNum">获取数值</button>
    <button @click="up">更新数值</button>
  </div>
</template>

<script>
  import CountTo from '@/components/count-to'
  export default {
    name: 'home',
    data(){
      return {
        endVal:100
      }
    },
    components:{
      CountTo
    },
    methods:{
      getNum(){
        this.$refs.countTo.getCount()
      },
      up(){
        this.endVal += Math.random()*100
      },
      animationEnd(num){
        console.log('动画已经结束,值为'+num)
      }
    }
  }
</script>
