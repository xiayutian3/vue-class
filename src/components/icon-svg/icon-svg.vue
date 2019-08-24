<template>
  <div>
    <svg class="iconfont-svg" aria-hidden="true" :style="styles">
      <use :xlink:href="hrefName"></use>
    </svg>
  </div>
</template>

<script>
  export default {
    name: "icon-svg",
    props:{
      icon:{
        type:String,
        default:''
      },
      size:{
        type: Number,
        default: 20
      }
    },
    computed:{
      hrefName(){
        return `#icon-${this.icon}`
      },
      styles(){
        return {
          fontSize:`${this.size}px`
        }
      }
    }
  }
</script>

<style >

</style>
