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
        edittingContent:''
      }
    },
    mounted(){
      this.initColumn()
    },
    watch:{
      columns(){
        this.initColumn()
      }
    },
    methods:{
      handleClick({row,index,column}){
        // console.log({row,index,column})
        if ( this.edittingId == `${column.key}_${index}`){
          let tableData = clonedeep(this.value)
          tableData[index][column.key]=this.edittingContent
          this.$emit('input',tableData)
          this.$emit('on-success',{row,index,column,message:this.edittingContent})
          this.edittingId = ''
          this.edittingContent = ''
        }else {
          this.edittingId = `${column.key}_${index}`
        }
      },
      handleInput(newVal){
        this.edittingContent = newVal
      },
      //后端表头变换，前端也要做出相应的变化
      initColumn(){
        let insideColumns = this.columns.map(item => {
          if (!item.rend && item.editable){
            item.render = (h,{row,index,column}) => {
              // console.log(row,index,column)
              const isEditting = this.edittingId === `${column.key}_${index}`
              return (
                <div>
                { isEditting
                      ? <Input value={row[column.key]} style="width:50px" on-input={this.handleInput} />
            : <span>{row[column.key]}</span>
            }
            <Button on-click={this.handleClick.bind(this,{row,index,column})}>
              {isEditting?'保存':'编辑'}
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
