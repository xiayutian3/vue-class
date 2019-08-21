<template>
  <div class="form-wrap" >
    <form-group :list="formList" :url="url"></form-group>
  </div>
</template>

<script>
  import FormGroup from '@@/form-group'
  import {sentFormData} from '@/api/data'
  export default {
    name: "forming",
    data(){
      return {
        url:'/data/form',
        //formList 应该是从请求中获取
        formList:[
          {
            name:'name',
            // type:'i-input',  课上是全局引入，所以能用i-input，我写的是按需引入，无法使用
            type:'Input',
            value:'',
            label:'姓名',
            rule:[
              { required: true, message: 'The name cannot be empty', trigger: 'blur' }
            ]
          },
          {
            name:'range',
            // type:'Slider',  大小写都可以
            type:'slider',
            value:[10,40],
            range:'range',
            label:'范围'
          },
          {
            name:'sex',
            type:'Select',
            value:'',
            label:'性别',
            children:{
              type:'Option',
              // type:'i-option',   课上是全局引入，所以能用i-option
              list:[
                {value:'man',title:'男'},
                {value:'women',title:'女'}
              ]
            }
          },
          {
            name:'education',
            type:'RadioGroup',
            value:1,
            label:'学历',
            children:{
              type:'Radio',
              list:[
                {label:1,title:'本科'},
                {label:2,title:'研究生'},
                {label:3,title:'博士'}
              ]
            }
          },
          {
            name:'skill',
            type:'CheckboxGroup',
            value:[],
            label:'技能',
            children:{
              type:'Checkbox',
              list:[
                {label:1,title:'Vue'},
                {label:2,title:'Anglar'},
                {label:3,title:'React'}
              ]
            }
          },
          {
            name:'inWork',
            type:'i-switch',  //我在mainjs 按需引入 里注册的名字就叫 i-switch，所以能用
            value:true,
            label:'在职'
          }
        ]
      }
    },
    methods:{

    },
    components:{
      FormGroup
    }
  }
</script>

<style lang="less">
  .form-wrap{
    padding: 20px;
  }
</style>
