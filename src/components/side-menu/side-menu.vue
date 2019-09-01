<template>
  <div class="side-menu-wrapper">
    <slot></slot>
    <Menu ref="mmenu" :active-name="$route.name" :open-names="openNames" v-show="!collapsed" width="auto" theme="dark" @on-select="seleFun">
      <!--//组建递归-->
      <template v-for="item in list">
        <re-submenu
          v-if="item.children"
          :key="item.meta.title"
          :parent="item"
        >
        </re-submenu>
        <MenuItem v-else :key="item.meta.title" :name="item.meta.title">
          <Icon :type="item.icon" />
          {{item.meta.title}}
        </MenuItem>
      </template>
    </Menu>

    <div v-show="collapsed">
      <template v-for="item in list">
        <re-dropdown @on-downselect="seleFun" class="outwrap" v-if="item.children" :showTitle="false" icon-color="#fff" :key="item.meta.title" :parent="item"></re-dropdown>
        <Tooltip v-else :content="item.meta.title" :key="item.meta.title" placement="right">
          <a class="drop-menu-a" href="###" @click="handleClick(item.title)">
            <Icon :type="item.icon" color="#fff" size="24"></Icon>
          </a>
        </Tooltip>
      </template>
    </div>

  </div>
</template>

<script>
  import ReSubmenu from './re-submenu.vue'
  import ReDropdown from './re-dropdown.vue'
  import {mapState} from 'vuex'
  import {getOpenArrByName} from '@/lib/util'
  export default {
    name: "side-menu",
    props:{
      collapsed:{
        type:Boolean,
        default: false
      },
      list:{
        type:Array,
        default:()=>[]
      }
    },
    data(){
      return {
        routers:[
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
      }
    },
    components:{
      ReSubmenu,
      ReDropdown
    },
    computed:{
      // ...mapState({
      //   routers: state => state.router.routers
      // }),
      openNames(){
        // console.log(getOpenArrByName(this.$route.name,this.routers))
        return getOpenArrByName(this.$route.name,this.routers)
      }
    },
    watch: {
      openNames (newVal,oldVal) {
        this.$nextTick( () => {
          //直接调用 不是方法了，跟view官网上的说明有冲突    2019/9/1
          this.$refs.mmenu.updateOpened
          // this.$refs.mmenu.updateActiveKey
        })
      }
    },
    methods:{
      seleFun(name){
        this.$router.push({
          name
        })
      },
      handleClick(title){
        console.log(title)
      }
    }
  }
</script>

<style lang="less" scoped>
.side-menu-wrapper{
  width: 100%;
  .ivu-tooltip, .drop-menu-a{
    display: block;
    width: 100%;
    color: #fff;
    text-align: center;
    padding: 5px 0;
  }
  .outwrap{
    padding: 5px 0;
  }
}
</style>
