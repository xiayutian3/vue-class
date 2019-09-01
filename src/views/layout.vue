<template>
  <div class="layout-wrapper">
    <Layout class="layout-outer">
      <!--<Sider width="200"  reverse-arrow collapsible breakpoint="md" v-model="collapsed" @on-collapse="collapseFun">-->
        <Sider width="200"  reverse-arrow  breakpoint="md" v-model="collapsed" @on-collapse="collapseFun" class="sider-outer">
          <side-menu :collapsed="false" :list="menuList"></side-menu>
        <!--<side-menu :collapsed="collapsed" :list="menuList"></side-menu>-->
      </Sider>
      <Layout>
        <Header class="header-wrap">
          <Icon :class="triggerClasses" @click="handleCollapsed" type="md-menu" :size="32"></Icon>
        </Header>
        <Content class="content-con">
          <div>
            <Tabs @on-click="handleClickTab" :animated="false" type="card" :value="getTabNameByRoute($route)">
              <Tab-pane :label="labelRender(item)" :name="getTabNameByRoute(item)" v-for="(item,index) in tabList" :key="`tabnav${index}`"></Tab-pane>
            </Tabs>
          </div>
          <div class="view-box">
            <Card shadow class="page-card">
              <router-view></router-view>
            </Card>
          </div>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
  import SideMenu from '@@/side-menu'
  import {mapState,mapMutations,mapActions} from 'vuex'
  import {getTabNameByRoute,getRouteById} from '@/lib/util'
  export default {
    name: "layout",
    data(){
      return {
        getTabNameByRoute,
        collapsed:false,
        menuList:[
          {
            path: '/',
            name: 'Layout',
            meta:{
              title:'主页'
            },
            children:[
              {
                path:'home',
                name:'Home',
                meta:{
                  title:'首页'
                }
              },
              {
                path:'table',
                name:'table',
                meta:{
                  title:'table'
                },
              },
              {
                path: 'folder_tree',
                name: 'folder_tree',
                meta:{
                  title:'folder_tree'
                },
              }
            ]
          },
          {
            path: '/about',
            name: 'about',
            meta:{
              title:'about'
            },
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
          },
          {
            path: '/countto',
            name: 'Countto',
            meta:{
              title:'countto'
            },
          },
          {
            path: '/split-pane',
            name: 'split-pane',
            meta:{
              title:'split-pane'
            },
          },
          {
            path: '/render_page',
            name: 'render_page',
            meta:{
              title:'render_page'
            },
          },
          {
            path: '/menu_page',
            name: 'menu_page',
            meta:{
              title:'menu_page'
            },
          },
          {
            path: '/login',
            name: 'login',
            meta:{
              title:'login'
            },
          },
          {
            path: '/test_vuex',
            name: 'test_vuex',
            meta:{
              title:'test_vuex'
            },
          },
          {
            path: '/form',
            name: 'form',
            meta:{
              title:'form'
            },
          },
          {
            path: '/forming',
            name: 'forming',
            meta:{
              title:'forming'
            },
          },
          {
            path: '/icon_page',
            name: 'icon_page',
            meta:{
              title:'icon_page'
            },
          },
          {
            path: '/optimize',
            name: 'optimize',
            meta:{
              title:'optimize'
            },
          }
        ]
        // menuList:[
        //   {
        //     title:'1',
        //     icon:'ios-aperture'
        //   },
        //   {
        //     title:'2',
        //     icon:'ios-aperture'
        //   },
        //   {
        //     title:'3',
        //     icon:'ios-aperture',
        //     children:[
        //       {
        //         title:'3-1',
        //         icon:'ios-aperture'
        //       },
        //       {
        //         title:'3-2',
        //         icon:'ios-aperture',
        //         children:[
        //           {
        //             title:'3-2-1',
        //             icon:'ios-aperture'
        //           },
        //           {
        //             title:'3-2-2',
        //             icon:'ios-aperture'
        //           },
        //         ]
        //       },
        //     ]
        //   }
        // ]
      }
    },
    computed:{
      triggerClasses(){
        return [
          'trigger-icon',
          this.collapsed?'rotate':''
        ]
      },
      ...mapState('tabnav',['tabList'])
    },
    methods:{
      ...mapActions('tabnav',['handleRemove']),
      handleCollapsed(){
        // this.collapsed = !this.collapsed
      },
      collapseFun(status){
        // console.log('collapseFun',status)
      },
      handleClickTab(id){
        // console.log(id)
        let route = getRouteById(id)
        // console.log('route',route)
        this.$router.push(route)
      },
      handleTabRemove(id,event){
        event.stopPropagation()
        this.handleRemove({
          id,
          $route:this.$route
        }).then(nextRoute => {
          this.$router.push(nextRoute)
        })
      },
      labelRender(item){
        return h => {
          return (
            <div>
              <span> {item.meta.title}</span>
              <Icon nativeOn-click={this.handleTabRemove.bind(this,getTabNameByRoute(item))} type="md-close-circle" style="line-height:10px;"></Icon>
            </div>
          )
        }
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
      .page-card{
        min-height: ~"calc(100vh - 84px)";
      }
      padding: 0;
      .ivu-tabs-bar{
        margin-bottom: 0;
      }
      .view-box{
        padding: 0;
      }
    }
  }
.sider-outer{
  height: 100%;
  overflow: hidden;
  .ivu-layout-sider-children{
    margin-right: -20px;
    overflow-y: scroll;
    overflow-x: hidden;
  }
}
</style>
