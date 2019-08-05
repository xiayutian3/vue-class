<template>
  <div class="folder-wrapper">
    <!--<Tree :data="folderTree" :render="renderFunc"></Tree>-->
    <folder-tree
      :folder-list.sync="folderList"
      :file-list.sync="fileList"
      :folder-drop = "folderDrop"
      :file-drop = "fileDrop"
      :before-delete = "beforeDelete"
    ></folder-tree>
  </div>
</template>

<script>
  // import {putFileInFolder,transferFolderToTree} from "@/lib/util";
  import FolderTree from '@@/folder-tree'
  export default {
    data(){
      return {
        //文件夹的name是英文，文件的name是中文  folder_id文件夹的目录层级
        folderList: [
          {
            name: 'wewq', creat_time: '1998-03-17 13:15:27', folder_id: 0, id: 1
          },
          {
            name: 'tyugj', creat_time: '1998-03-17 13:15:27', folder_id: 0, id: 2
          },
          {
            name: 'sdfsf', creat_time: '1998-03-17 13:15:27', folder_id: 0, id: 3
          },
          {
            name: 'bvnbv', creat_time: '1998-03-17 13:15:27', folder_id: 1, id: 4
          },
          {
            name: 'cxzvd', creat_time: '1998-03-17 13:15:27', folder_id: 2, id: 5
          }
        ],
        fileList: [
          {
            name: '天天混底薪', creat_time: '1998-03-17 13:15:27', folder_id: 2, id: 10000
          },
          {
            name: '天天混底薪', creat_time: '1998-03-17 13:15:27', folder_id: 2, id: 10001
          },
          {
            name: '天天混底薪', creat_time: '1998-03-17 13:15:27', folder_id: 5, id: 10002
          },
          {
            name: '天天混底薪', creat_time: '1998-03-17 13:15:27', folder_id: 1, id: 10003
          },
          {
            name: '天天混底薪', creat_time: '1998-03-17 13:15:27', folder_id: 1, id: 10004
          },
          {
            name: '天天混底薪', creat_time: '1998-03-17 13:15:27', folder_id: 4, id: 10005
          },
          {
            name: '天天混底薪', creat_time: '1998-03-17 13:15:27', folder_id: 3, id: 10006
          },
          {
            name: '天天混底薪', creat_time: '1998-03-17 13:15:27', folder_id: 2, id: 10007
          },
          {
            name: '天天混底薪', creat_time: '1998-03-17 13:15:27', folder_id: 4, id: 10008
          },
          {
            name: '天天混底薪', creat_time: '1998-03-17 13:15:27', folder_id: 5, id: 10009
          },
        ],
        folderDrop: [
          {name: 'rename', title: '重命名文件夹'},
          {name: 'delete', title: '删除文件夹'}
        ],
        fileDrop: [
          {name: 'rename', title: '重命名文件'},
          {name: 'delete', title: '删除文件'}
        ]
        // folderTree:[],
        // renderFunc: (h,{root, node, data}) => {
        //   // console.log(data);
        //   return (
        //     <div class="tree-item">
        //       { data.type == 'folder'? <Icon type="ios-folder" color="#2d8cf0" style="margin-right:10px" ></Icon> : ''}
        //       {data.title}
        //     </div>
        // )
        // }
      }
    },
    mounted(){
      // Promise.all([getdata1(),getData2()]).then(res => {
      //   //res 是一个数组
      //   console.log(res)
      // })

      //把 **文件** 放到相应的 文件夹 下边
      // console.log(putFileInFolder(this.folderList, this.fileList));
      //把 **文件夹** 放到相应的 文件夹 下边
      // console.log(transferFolderToTree(putFileInFolder(this.folderList,this.fileList)))


      // this.folderTree = transferFolderToTree(putFileInFolder(this.folderList,this.fileList))
    },
    methods:{
      beforeDelete(){
        return new Promise((resolve,reject) =>{
          setTimeout(()=>{
            // let error = new Error('error')
            let error = null
            if (!error){
              resolve()
            } else {
              reject(error)
            }
          },1000)
        })
      }
    },
    components:{
      FolderTree
    }
  }
</script>

<style lang="less">
.folder-wrapper{
  width: 300px;
}

</style>
