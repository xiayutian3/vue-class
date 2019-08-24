<template>
  <div>
    <i :class="classes" :style="styles"></i>
  </div>
</template>

<script>
  export default {
    name: "icon-font",
    props:{
      icon:{
        type:String,
        default:''
      },
      color:{
        type: String,
        default: '#515a6e'
      },
      size:{
        type:Number,
        default:12
      }
    },
    computed:{
      classes(){
       return [
         'iconfont',
         `icon-${this.icon}`
       ]
      },
      styles(){
        return {
          color:this.color,
          fontSize: `${this.size}px`
        }
      }
    }
  }
</script>

<style scoped>

</style>
