<template>
  <Table :columns="insideColumns" :data="value"></Table>
</template>

<script>
  import clonedeep from 'clonedeep'
  export default {
    name: "edit-table",
    props:{
      columns:{
        type:Array,
        default:()=>[]
      },
      value:{
        type:Array,
        default:()=>[]
      }
    },
    data(){
      return{
        edittingId:'',
        insideColumns:[],
        edittingContent:'',
        insideData:[]
      }
    },
    mounted(){
      this.initColumn()
    },
    watch:{
      columns(){
        this.initColumn()
      },
      value(){
        this.initColumn()
      }
    },
    methods:{
      handleClick({row,index,column}){
        let keyIndex = this.insideData[index].edittingKeyArr?this.insideData[index].edittingKeyArr.indexOf(column.key):-1
          //当前行的的对象
        let rowObj = this.insideData[index]
        if ( keyIndex > -1 ){
          //*****保存变编辑状态的情况****
          rowObj.edittingKeyArr.splice(keyIndex,1)
          this.insideData.splice(index,1,rowObj)
          // console.log(this.insideData);
          this.$emit('input', this.insideData)
          this.$emit('on-success',{row,index,column,message:this.insideData[index][column.key]})
        }else {
          //*****编辑变保存状态的情况****8
          rowObj.edittingKeyArr = (rowObj.edittingKeyArr? [...rowObj.edittingKeyArr,column.key]:[column.key])
          //更新视图
          this.insideData.splice(index,1,rowObj)
      }
      },
      handleInput({row,index,column},newVal){
        this.insideData[index][column.key] = newVal
      },
      //后端表头变换，前端也要做出相应的变化
      initColumn(){
        //拷贝数据
        this.insideData = clonedeep(this.value)
        let insideColumns = this.columns.map(item => {
          if (!item.rend && item.editable){
            item.render = (h,{row,index,column}) => {
              // console.log(row,index,column)
              const keyArr =this.insideData ? this.insideData[index].edittingKeyArr:[]
              //判断是否需要编辑状态
              const editStatus =  keyArr && keyArr.indexOf(column.key) > -1
                // 也可以用箭头函数 <Button on-click={()=>{this.handleClick({row,index,column})}}>
              return (
                <div>
                { editStatus
                      ? <Input value={row[column.key]} style="width:50px" on-input={this.handleInput.bind(this,{row,index,column})} />
                    : <span>{row[column.key]}</span>
                }
                <Button on-click={this.handleClick.bind(this,{row,index,column})}>
                  {editStatus?'保存':'编辑'}
                </Button>
                  </div>
                )
                }
            return item
          }else return item
        })
        this.insideColumns = insideColumns
      }

    }
  }
</script>

<style scoped>

</style>
