<template>
  <Form ref="form" v-if="config" :label-width="100" :model="valueData" :rules="ruleData">
    <FormItem
      :label="config.label"
      label-position="left"
      :key="`${_uid}`"
      :prop="config.name"
      :error="errorStore[config.name]"
      @click.native="handleFocus(config.name)"
    >
      <!--<Input v-if="item.type == 'input'" />-->



      <component :is="config.type" v-model="valueData[config.name]" :range="config.range" >
        <template v-if="config.children">
          <component
            v-for="(child,i) in config.children.list"
            :is="config.children.type"
            :key="`${_uid}_${i}`"
            :value="child.value"
            :label="child.label"
          >{{child.title}}</component>
        </template>
      </component>
    </FormItem>
  </Form>
</template>

<script>
  export default {
    name: "form-single",
    props:{
      valueData:{
        type:Object,
        default:() => ({})
      },
      ruleData:{
        type:Object,
        default:() => ({})
      },
      errorStore:{
        type:Object,
        default:() => ({})
      },
      config:Object
    },
    methods:{
      handleFocus(name){
        this.errorStore[name] = ''
      },
      validata(callback){
        this.$refs.form.validate(valid => {
          callback(valid)
        })
      }
    }
  }
</script>

<style scoped>

</style>
