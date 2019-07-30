<template>
  <div class="layout-wrapper">
    <Layout class="layout-outer">
      <Sider collapsible></Sider>
      <Layout>
        <Header class="header-wrap"></Header>
        <Content></Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
  export default {
    name: "layout"
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
    }
  }

</style>
