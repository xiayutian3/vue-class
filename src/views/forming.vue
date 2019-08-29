<template>
  <div class="form-wrap" >
    <!--<form-group :list="formList" :url="url"></form-group>-->

    <!--//数据量大的时候-->
    <form-single
      ref="formSingle"
      v-for="(item,index) in formList"
      :key="`form_${index}`"
      :config="item"
      :value-data="valueData"
      :rules-data="ruleData"
      :error-store="errorStore"
    ></form-single>
    <Button @click="handleSubmit" type="primary" >提交</Button>
    <Button @click="handleReset">重置</Button>
  </div>
</template>

<script>
  import clonedeep from 'clonedeep'
  import FormGroup from '@@/form-group'
  import FormSingle from '@@/form-single'
  import {sentFormData} from '@/api/data'
  import formData from '@/mock/form-data'
  export default {
    name: "forming",
    data(){
      return {
        valueData:{},
        ruleData:{},
        errorStore:{},
        initValueData:{},
        url:'/data/form',
        //formList 应该是从请求中获取
        formList:formData
          // [
          // {
          //   name:'name',
          //   // type:'i-input',  课上是全局引入，所以能用i-input，我写的是按需引入，无法使用
          //   type:'Input',
          //   value:'',
          //   label:'姓名',
          //   rule:[
          //     { required: true, message: 'The name cannot be empty', trigger: 'blur' }
          //   ]
          // },
          // {
          //   name:'range',
          //   // type:'Slider',  大小写都可以
          //   type:'slider',
          //   value:[10,40],
          //   range:'range',
          //   label:'范围'
          // },
          // {
          //   name:'sex',
          //   type:'Select',
          //   value:'',
          //   label:'性别',
          //   children:{
          //     type:'Option',
          //     // type:'i-option',   课上是全局引入，所以能用i-option
          //     list:[
          //       {value:'man',title:'男'},
          //       {value:'women',title:'女'}
          //     ]
          //   }
          // },
          // {
          //   name:'education',
          //   type:'RadioGroup',
          //   value:1,
          //   label:'学历',
          //   children:{
          //     type:'Radio',
          //     list:[
          //       {label:1,title:'本科'},
          //       {label:2,title:'研究生'},
          //       {label:3,title:'博士'}
          //     ]
          //   }
          // },
          // {
          //   name:'skill',
          //   type:'CheckboxGroup',
          //   value:[],
          //   label:'技能',
          //   children:{
          //     type:'Checkbox',
          //     list:[
          //       {label:1,title:'Vue'},
          //       {label:2,title:'Anglar'},
          //       {label:3,title:'React'}
          //     ]
          //   }
          // },
          // {
          //   name:'inWork',
          //   type:'i-switch',  //我在mainjs 按需引入 里注册的名字就叫 i-switch，所以能用
          //   value:true,
          //   label:'在职'
          // }
        // ]
      }
    },
    mounted(){
      let valueData = {}
      let ruleData = {}
      let errorStore = {}
      let initValueData = {}
      formData.filter( item => {
        valueData[item.name] = item.value
        ruleData[item.name] = item.rule
        errorStore[item.name] = ''
        initValueData[item.name]=item.value
      })
      this.valueData = valueData
      this.ruleData = ruleData
      this.errorStore = errorStore
      this.initValueData = initValueData
    },
    methods:{
      handleSubmit(){
        let isValid = true
        this.$refs.formSingle.forEach(item => {
          item.validata(valid =>{
            if (!valid) isValid = false
          })
        })
        if (isValid){  //验证通过再发请求
          sentFormData({
              url:this.url,
              data:this.valueData
            }).then(res => {
              this.$emit('on-submit-success',res)
            }).catch(err => {
              console.log(err.response)
              // this.errorStore = err.response.data
              this.$emit('on-submit-err',err)
              for (let key in err){
                this.errorStore[key] = err[key]
              }
            })
        }
        // this.$refs.form.validate(valid => {
        //   if (valid) {
        //     sentFormData({
        //       url:this.url,
        //       data:this.valueList
        //     }).then(res => {
        //       this.$emit('on-submit-success',res)
        //     }).catch(err => {
        //       console.log(err.response)
        //       // this.errorStore = err.response.data
        //       this.$emit('on-submit-err',err)
        //       for (let key in err){
        //         this.errorStore[key] = err[key]
        //       }
        //     })
        //   }
        // })
      },
      handleReset(){
        this.valueData = clonedeep(this.initValueData)
      },
    },
    components:{
      FormGroup,
      FormSingle
    }
  }
</script>

<style lang="less">
  .form-wrap{
    padding: 20px;
  }
</style>
