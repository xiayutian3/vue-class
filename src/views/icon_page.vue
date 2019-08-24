<template>
  <div>
    <Icon type="md-menu" size=50 color="pink" />
    <i class="iconfont shop">&#xe618;</i>
    <i class="iconfont">&#xe617;</i>
    <svg class="iconfont-svg person" aria-hidden="true">
      <use xlink:href="#icon-shouye4"></use>
    </svg>
    <!--//ivew中的使用方式-->
    <i class="iconfont icon-shouye"></i>
    <Icon custom="iconfont icon-shouye"/>

    <!--//自定义iconfont组件-->
    <icon-font icon="shouye3" color="red" :size="30" />
    <icon-svg icon="icon-test2" :size="50" />
  </div>
</template>

<script>
  import IconFont from '@@/icon-font'
  import IconSvg from '@@/icon-svg'
  export default {
    name: "icon_page",
    components:{
      IconFont,
      IconSvg
    }
  }
</script>

<style lang="less">
.shop{
  color: red;
  font-size: 30px;
}
  .person{
    color: lightseagreen;
    font-size: 30px;
  }
</style>
