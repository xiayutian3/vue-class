<template>
  <div class="layout-wrapper">
    <Layout class="layout-outer">
      <Sider width="300"  reverse-arrow collapsible breakpoint="md" v-model="collapsed" @on-collapse="collapseFun">
        <side-menu :collapsed="collapsed" :list="menuList"></side-menu>
      </Sider>
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
  import SideMenu from '@@/side-menu'
  export default {
    name: "layout",
    data(){
      return {
        collapsed:false,
        menuList:[
          {
            title:'1',
            icon:'ios-aperture'
          },
          {
            title:'2',
            icon:'ios-aperture'
          },
          {
            title:'3',
            icon:'ios-aperture',
            children:[
              {
                title:'3-1',
                icon:'ios-aperture'
              },
              {
                title:'3-2',
                icon:'ios-aperture',
                children:[
                  {
                    title:'3-2-1',
                    icon:'ios-aperture'
                  },
                  {
                    title:'3-2-2',
                    icon:'ios-aperture'
                  },
                ]
              },
            ]
          }
        ]
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
      },
      collapseFun(status){
        // console.log('collapseFun',status)
      }
    },
    components:{
      SideMenu
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
