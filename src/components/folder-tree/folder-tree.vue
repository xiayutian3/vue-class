<template>
    <Tree :data="folderTree" :render="renderFunc"></Tree>
</template>

<script>
  import {putFileInFolder,transferFolderToTree,expandSpecifiedFolder} from "@/lib/util";
  import clonedeep from 'clonedeep'
  export default {
    name:'folder-tree',
    props:{
      folderList:{
        type:Array,
        default: () => []
      },
      fileList:{
        type:Array,
        default: () => []
      },
      folderDrop:Array,
      fileDrop:Array,
      beforeDelete:Function
    },
    data(){
      return{
        folderTree:[],
        currentRenamingId:'',
        currentRenamingContent:'',
        renderFunc: (h,{root, node, data}) => {
          // console.log(data);
          const dropList = data.type =='folder'?this.folderDrop:this.fileDrop
          const dropdownRender = dropList.map(item=>{
            return (
              <DropdownItem name={item.name}>{item.title}</DropdownItem>
            )
           })
          const isRenaming =  this.currentRenamingId == `${data.type || 'file' }_${data.id}`
          return (
            <div class="tree-item">
              { data.type == 'folder'? <Icon type="ios-folder" color="#2d8cf0" style="margin-right:10px" ></Icon> : '' }
              {
                isRenaming
                  ? <span>
                      <Input value = {data.title} on-input={this.handleInput} class="tree-rename-input" />
                      <Button size="small" type="text"><Icon type="md-close" /></Button>
                      <Button size="small" type="text" on-click={this.saveRename.bind(this,data)}><Icon type="md-checkmark" /></Button>
                    </span>
                  : <span>{ data.title}</span>
              }
          {
            dropList && !isRenaming ? <Dropdown placement="right-start" on-on-click={this.handleDropdownClick.bind(this,data)}>
                        <Button size="small" type="text" class="tree-item-button">
                          <Icon type="md-more" size={12}/>
                        </Button>
                        <DropdownMenu slot="list">
                          {dropdownRender}
                        </DropdownMenu>
                      </Dropdown> : ''
          }

            </div>
          )
        }
      }
    },
    mounted(){
      this.transData()
    },
    watch:{
      folderList(){
        this.transData()
      },
      fileList(){
        this.transData()
      }
    },
    methods:{
      transData(){
        this.folderTree = transferFolderToTree(putFileInFolder(this.folderList,this.fileList))
      },
      isFolder(type){
        return type === 'folder'
      },
      handleDelete(data){
        const folderId = data.folder_id
        const isFolder = this.isFolder(data.type)
        let updateListName = isFolder ? 'folderList':'fileList'
        let list = isFolder ? clonedeep(this.folderList):clonedeep(this.fileList)
        list = list.filter(item => item.id !== data.id )
        this.$emit(`update:${updateListName}`,list)
        //删除完成后，继续展开文件夹
        this.$nextTick(()=>{
          expandSpecifiedFolder(this,this.folderTree, folderId)
        })
      },
      handleDropdownClick(data,name){
        if(name == "rename"){
          this.currentRenamingId = `${data.type || 'file' }_${data.id}`
        }else if (name == "delete") {
          this.$Modal.confirm({
            title: '提示',
            content: `您确定要删除${this.isFolder(data.type)?'文件夹':'文件'}《${data.title}》吗？`,
            onOk:()=> {
              this.beforeDelete ? this.beforeDelete().then(()=> {
                this.handleDelete(data)
              }).catch(()=> {
                this.$Message.error(`删除失败`)
              }): this.handleDelete(data)
            }
          })
        }
      },
      handleInput(value){
        this.currentRenamingContent = value
      },
      updateList(list, id){
        let i = -1
        let len = list.length
        while(++i < len){
          let folderItem = list[i]
          if (folderItem.id == id){
            folderItem.name = this.currentRenamingContent
            list.splice(i,1,folderItem)
            break
          }
        }
        return list
      },
      saveRename(data){
        const id = data.id
        const type = data.type
        if (type =="folder") {
          // let len = this.folderList.length
          // while(++i < len){
          //   let folderItem = this.folderList[i]
          //   if (folderItem.id == id){
          //     folderItem.name = this.currentRenamingContent
          //     this.folderList.splice(i,1,folderItem)
          //     break
          //   }
          // }
          const resultList = this.updateList(clonedeep(this.folderList),id)
          this.$emit('update:folderList',resultList)

        }else{
          const resultList = this.updateList(clonedeep(this.fileList),id)
          this.$emit('update:fileList',resultList)
        }
        this.currentRenamingId = ''
        this.currentRenamingContent = ''
      }
    }
  }
</script>

<style lang="less">
  .tree-item{
    display: inline-block;
    width: ~"calc(100% - 50px)";
    height: 30px;
    line-height: 30px;
    & > .ivu-dropdown {
      float: right;
    }
    .tree-rename-input{
      width: ~"calc(100% - 80px)";
    }
  }
</style>
