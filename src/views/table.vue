<template>
  <div>
    <!--<edit-table-->
      <!--:columns="columns" v-model="tableData"-->
      <!--@on-success="successCallback"-->
    <!--&gt;</edit-table>-->

    <edit-table-mul :columns="columns"  v-model="tableData"></edit-table-mul>

  </div>
</template>

<script>
  import EditTable from '@@/edit-table'
  import EditTableMul from '@@/edit-table-mul'
  export default {
    name: "Table",
    data(){
      return{
        tableData:[
          {
            name: 'John Brown',
            age: 18,
            email: '@New York No. 1 Lake Park',
            date: '2016-10-03'
          },
          {
            name: 'Jim Green',
            age: 24,
            email: '@London No. 1 Lake Park',
            date: '2016-10-01'
          },
          {
            name: 'Joe Black',
            age: 30,
            email: '@Sydney No. 1 Lake Park',
            date: '2016-10-02'
          },
          {
            name: 'Jon Snow',
            age: 26,
            email: '@Ottawa No. 2 Lake Park',
            date: '2016-10-04'
          }
        ],
        columns:[
          {key:'name',title:'姓名'},
          {key:'age',title:'年龄',editable:true},
          {key:'email',title:'邮箱',editable:true}
        ]
      }
    },
    components:{
      EditTable,
      EditTableMul
    },
    methods:{
      successCallback({row,index,column,message}){
        // console.log({row,index,column,message})
      }
    }
  }
</script>

<style scoped>

</style>
