<template>
    <div class="split-pane-wrapper" ref="out">
      <div class="pane pane-left" :style="{width:leftOffsetPercent,paddingRight:`${this.triggerWidth/2}px`}">
        <!--<button @click="clickChang">点击变化</button>-->
        <slot name="left"></slot>
      </div>
      <div class="pane-trigger-con" :style="{left:triggerLeft,width: triggerWidth+'px'}" @mousedown="handleDown"></div>
      <div class="pane pane-right" :style="{left:leftOffsetPercent,paddingLeft:`${this.triggerWidth/2}px`}">
        <slot name="right"></slot>
      </div>
    </div>

</template>

<script>
  export default {
    name: "SplitPane",
    props:{
      value:{
        type:Number,
        default:0.5
      },
      triggerWidth:{
        type:Number,
        default:8
      },
      min:{
        type: Number,
        default: 0.1
      },
      max:{
        type: Number,
        default: 0.9
      }
    },
    data(){
      return {
        // leftOffset:this.value,
        canMove:false,
        initOffset:0
      }
    },
    computed:{
      leftOffsetPercent(){
        return `${this.value*100}%`
      },
      triggerLeft(){
        return `calc(${this.value*100}% - ${this.triggerWidth/2}px)`
      }
    },
    methods:{
      clickChang(){
        // this.leftOffset -=0.02
      },
      handleDown(ev){
        document.addEventListener('mousemove',this.handleMove)
        document.addEventListener('mouseup',this.handleUp)
        this.initOffset = ev.pageX-ev.target.getBoundingClientRect().left
        this.canMove = true
      },
      handleMove(ev){
        // console.log(this.$refs.out.getBoundingClientRect())
        // console.log(ev.pageX-this.$refs.out.getBoundingClientRect().left)
        if (!this.canMove) return
        const outRect = this.$refs.out.getBoundingClientRect()
        let offsetPercent = (ev.pageX - this.initOffset+ this.triggerWidth/2 -outRect.left)/outRect.width
        if (offsetPercent<this.min) offsetPercent = this.min
        if (offsetPercent>this.max) offsetPercent = this.max
        // this.leftOffset = offsetPercent
        // this.$emit('input',offsetPercent)
        //   .sync修饰符语法
        this.$emit('update:value',offsetPercent)

      },

      handleUp(){
        this.canMove = false
      }
    }
  }
</script>

<style lang="less" scoped>
  .split-pane-wrapper{
    height: 100%;
    width: 100%;
    position: relative;
    .pane{
      position: absolute;
      top: 0;
      height: 100%;
      &-left{
        // width: 30%;
        background: palevioletred;
      }
      &-right{
        right: 0;
        bottom: 0;
        background: paleturquoise;
      }
      &-trigger-con{
        height: 100%;
        background: red;
        position: absolute;
        top: 0;
        z-index: 10;
        user-select: none;
        cursor: col-resize;
      }
    }
  }
</style>
