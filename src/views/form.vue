<template>
  <div class="form-wrap">
    <Form ref="form" :label-width="80" style="width: 300px" :model="formData" :rules="rules">
      <FormItem label="姓名" prop="name">
        <Input v-model="formData['name']"/>
      </FormItem>
      <FormItem label="年龄">
        <Input v-model="formData['age']"/>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit">提交</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
  import {sentFormData} from '@/api/data'
  export default {
    name: "Formdd",
    data(){
      const validateName = (rule, value, callback) => {
        if (value !== 'js') {
          callback(new Error('name error'));
        }else {
          callback();
        }
      };
      return {
        formData:{
          name:'',
          age:18
        },
        rules:{
          name:[
            { required: true, message: 'The name cannot be empty', trigger: 'blur' },
            { validator: validateName, trigger: 'blur' }
          ]
        }
      }
    },
    methods:{
     async handleSubmit(){
       this.$refs.form.validate(valid => {
         if (valid){
           console.log(valid)
           //验证通过 发起请求

           // 演示 因为没有搭后台
           //  let res = await sentFormData(this.formData)
           // console.log(res)
         }
       })

      }
    }
  }
</script>

<style lang="less">
.form-wrap{
  padding: 20px;
}
</style>
