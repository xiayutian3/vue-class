<template>
  <Form ref="form" v-if="Object.keys(valueList).length" :label-width="labelWidth" :model="valueList" :rules="rules">
    <FormItem
      v-for="(item,index) in list"
      :label="item.label"
      label-position="left"
      :key="`${_uid}_${index}`"
      :prop="item.name"
      :error="errorStore[item.name]"
      @click.native="handleFocus(item.name)"
    >
      <!--<Input v-if="item.type == 'input'" />-->



      <component :is="item.type" v-model="valueList[item.name]" :range="item.range" >
        <template v-if="item.children">
          <component
            v-for="(child,i) in item.children.list"
            :is="item.children.type"
            :key="`${_uid}_${index}_${i}`"
            :value="child.value"
            :label="child.label"
          >{{child.title}}</component>
        </template>
      </component>
    </FormItem>
    <FormItem>
      <Button @click="handleSubmit" type="primary" >提交</Button>
      <Button @click="handleReset">重置</Button>
    </FormItem>
  </Form>
</template>

<script>
  import clonedeep from 'clonedeep'
  import {sentFormData} from '@/api/data'
  export default {
    name: "form-group",
    props:{
      list:{
        type:Array,
        default: () => []
      },
      labelWidth:{
        type: Number,
        default:100
      },
      url:{
        type:String,
        required:true
      }
    },
    data(){
      return{
        initValueList:{},
        valueList:{},
        rules:{},
        errorStore:{}
      }
    },
    mounted(){
      this.setInitValue()
    },
    methods:{
      setInitValue(){
        let rules = {}
        let valueList = {}
        let initValueList = {}
        let errorStore = {}
        this.list.forEach(item => {
          rules[item.name]=item.rule
          valueList[item.name]=item.value
          initValueList[item.name]=item.value
          errorStore[item.name] = ''
        })
        this.rules = rules
        this.valueList = valueList
        this.initValueList = initValueList
        this.errorStore = errorStore
      },
      handleSubmit(){
        this.$refs.form.validate(valid => {
          if (valid) {
            sentFormData({
              url:this.url,
              data:this.valueList
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
        })
      },
      handleReset(){
        this.valueList = clonedeep(this.initValueList)
      },
      handleFocus(name){
        this.errorStore[name] = ''
      }
    },
    watch:{
      list(){
        this.setInitValue()
      }
    }
  }
</script>

<style lang="less">

</style>
