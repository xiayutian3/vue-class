<template>
  <div>
    <!--<Select v-model="selectData" style="width:200px">-->
      <!--<virtual-list :size="30" :remain="6">-->
        <!--<Option v-for="item in list" :value="item.value" :key="item">{{ item.label }}</Option>-->
      <!--</virtual-list>-->
    <!--</Select>-->
    <!--<Select v-model="selectData" style="width:200px">-->
      <!--<virtual-list :size="30" :remain="6">-->
        <!--<Option v-for="item in list" :value="item.value" :key="item">{{ item.label }}</Option>-->
      <!--</virtual-list>-->
    <!--</Select>-->
    <!--<Select v-model="selectData" style="width:200px">-->
      <!--<virtual-list :size="30" :remain="6">-->
        <!--<Option v-for="item in list" :value="item.value" :key="item">{{ item.label }}</Option>-->
      <!--</virtual-list>-->
    <!--</Select>-->
    <!--<Select v-model="selectData" style="width:200px">-->
      <!--<virtual-list :size="30" :remain="6">-->
        <!--<Option v-for="item in list" :value="item.value" :key="item">{{ item.label }}</Option>-->
      <!--</virtual-list>-->
    <!--</Select>-->


    <Checkbox-group v-model="checkBoxArr">
      <virtual-list :size="30" :remain="6">
        <p v-for="item in list" :key="`check${item.value}`" style="height: 30px;">
          <Checkbox :label="item.value">
            <Icon type="social-twitter"></Icon>
            <span>{{item.label}}</span>
          </Checkbox>
        </p>
      </virtual-list>
    </Checkbox-group>
  </div>
</template>

<script>
  import VirtualList from 'vue-virtual-scroll-list'
  export default {
    name: "optimize",
    data(){
      return{
        list:[],
        selectData:0,
        checkBoxArr:[]
      }
    },
    mounted(){
      let list = []
      this.doCustomTimes(1000,(index) => {
        list.push({
          value:index,
          label:`select${index}`
        })
      })
      this.list = list
    },
    methods:{
      doCustomTimes(times,callback){
        let i = -1
        while (++i<times){
          callback(i)
        }
      }
    },
    components:{
      VirtualList
    }
  }
</script>

<style>

</style>
