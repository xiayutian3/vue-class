<template>
  <div class="layout-wrapper">
    <Layout class="layout-outer">
      <Sider  reverse-arrow collapsible breakpoint="md" v-model="collapsed"></Sider>
      <Layout>
        <Header class="header-wrap">
          <Icon :class="triggerClasses" @click="handleCollapsed" type="md-menu" :size="32"></Icon>
        </Header>
        <Content class="content-con">
          <Card shadow class="page-card">
            <router-view></router-view>
          </Card>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
  export default {
    name: "layout",
    data(){
      return {
        collapsed:false
      }
    },
    computed:{
      triggerClasses(){
        return [
          'trigger-icon',
          this.collapsed?'rotate':''
        ]
      }
    },
    methods:{
      handleCollapsed(){
        this.collapsed = !this.collapsed
      }
    }
  }
</script>

<style lang="less" >
  .layout-wrapper{
    height: 100%;
  }
  .layout-outer{
    height: 100%;
    .header-wrap{
      background: #fff;
      box-shadow: 0 1px 1px 1px rgba(0,0,0,.1);
      padding: 0 23px;
      .trigger-icon{
        cursor: pointer;
        transition: transform .3s ease;
        &.rotate{
          transform: rotate(-90deg);
        }
      }
    }
    .content-con{
      padding: 10px;
      .page-card{
        min-height: ~"calc(100vh - 84px)";
      }
    }
  }

</style>
