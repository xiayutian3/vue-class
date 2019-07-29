<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!--<div> 根store：{{$store.state.appName}}</div>-->
    <!--<div> modules:{{$store.state.user.name}}</div>-->
    <!--<div> 根store：{{appName}}</div>-->
    <div> 用户名modules:{{username}}</div>
    <!--<div>name:{{name}}</div>-->

    <!--<input type="text" v-model="stateVal" />-->

    <!--使用vuex-->
    <a-input :value="yyz" @input="handleState" ></a-input>
    <div>input数据从vuex中获取<input type="text" v-model="yyz"></div>
    <!--<input type="text" :value="yyz" @input="handleState" />   错误写法-->
            <div>{{yyz}}</div>
    <!--<div>last word : {{inpLastVal}}</div>-->
    <div>appNameVersion: {{appNameWithVersion}}</div>
    <div>modules中的getters：{{firstName}}</div>
    <button @click="changName">
      修改APP名
    </button>
    <!--<div>appVersion:{{appVersion}}</div>-->
    <button @click="registerModule">动态注册一个模块</button>
    <div v-for="(item,index) in todoList" :key="index">{{item}}</div>
    <div>username:{{$store.state.user.name}}</div>
    <div>input本身也有@input <input type="text" v-model="cc" @input="ccFun">  </div>
  </div>
</template>
<script>
  import AInput from '@/components/AInput.vue'
  import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'

  // import state from "../../../vue-cource/src/store/state";
  // import { createNamespacedHelpers } from 'vuex'
  // const { mapState} = createNamespacedHelpers('user')
  export default {
    data(){
      return{
        inpVal:'',
        cc:''
      }
    },
    computed:{
      // 如果模块没有开启命名空间,直接获取
      // 例如：user模块   namespaced:true,
      // ...mapGetters(['appNameWithVersion','firstName'])


      // appNameWithVersion(){
      //   return this.$store.getters.appNameWithVersion
      // },
        inpLastVal(){
          return this.inpVal.substr(-1,1)
        },

      // ...mapState('user',['name'])

      ...mapState('user',{
        username: state => state.name
      }),
      ...mapGetters(['appNameWithVersion']),
      // ...mapGetters('user',['firstName']),
      firstName(){
          return this.$store.getters['user/firstName']
      },
      // ...mapState({
      //   // 使用了createNamespacedHelpers('user'),就不能使用mapState拿得到appName了
      //   username: state => state.name,
      //   // 例如： appName: state => state.appName,
      // })


      // appName(){
      //   return this.$store.state.appName
      // },
      // username(){
      //   return this.$store.state.user.name
      // }

      //或者这样写
      // ...mapState(['appName'])

      // ...mapState({
      //   appName: state => state.appName,
      //   username: state => state.user.name
      // })

      // appVersion(){
      //   return this.$store.state.appVersion
      // },
      // ...mapState({
      //   yyz: state => state.yyz
      // }),
      yyz:{
          get(){
            return this.$store.state.yyz
          },
        set(val){
          this.SET_HANDLESTATE(val)
        }
      },
      ...mapState({
        // appVersion: state => state.appVersion,
        appName: state => state.appName,
        //mapState中不管你填不添加模块名  namespaced:true,  都要经过  state.模块名.xxx 来获取
        //modules中 mapGetters,mapMutations,mapActions 没有namespaced:true 就不用  .模块名.xxx  获取，
        // 直接相当于没有模块，直接获取即可  例如：...mapGetters(['appNameWithVersion'])
        // todoList: state => state.todo?state.todo.todoList:[],
        todoList: state => state.user.todo?state.user.todo.todoList:[],
      }),

    },
    mounted(){
      // console.log(this.$store.getters)
      console.log(this.$store.state)
      // console.log(yyz)
    },
    methods:{
      ...mapActions(['updateAppName']),
      ...mapMutations(['SET_APP_NAME','setNewProp','SET_HANDLESTATE']),
      ...mapMutations('user',['SET_NAME']),
      changName(){
        // this.$store.commit('SET_APP_NAME','sala')
        // this.$store.commit({
        //   type:'SET_APP_NAME',
        //   appName:'newAppName'
        // });
        this.$store.commit({
          type:'setNewProp'
        });
        // this.SET_APP_NAME({appName:'newAppName'});
        this.SET_NAME('new123')
        // this.updateAppName()
        this.$store.dispatch('updateAppName')
      },
      //动态注册模块
      registerModule(){
        // this.$store.registerModule('todo',{
        //   state:{
        //     todoList:[
        //       '学习todolist',
        //       '学习actions',
        //     ]
        //   }
        // })

        // 在user中建子模块
        this.$store.registerModule(['user','todo'],{
          state:{
            todoList:[
              '学习todolist',
              '学习actions',
            ]
          }
        })

        //vuex严格模式会报错   (错误写法_
        // this.$store.state.user.name ="hahha123"
      },
      handleState(val){
        this.SET_HANDLESTATE(val)
        // console.log('val',val)
      },
      ccFun(val){
        console.log('ccval',val)
        console.log(this.cc)
        // this.cc = val
      }
    },
    components:{
      AInput
    }
  }
</script>
