import clonedeep from 'clonedeep'

export const putFileInFolder = (folderList,fileList) => {
  //文件夹
  let folderListCloned = clonedeep(folderList)
  //文件
  let fileListCloned = clonedeep(fileList)

 return folderListCloned.map(folderItem => {
    let folderId = folderItem.id
    let index = fileListCloned.length
    while (--index >=0 ){  //从数组后边删除元素，不影响别的元素
      let fileItem = fileListCloned[index]
      if (folderId == fileItem.folder_id){
        let file = fileListCloned.splice(index,1)[0]  //返回的东西放在数组里边
        file.title = file.name
        if (folderItem.children) folderItem.children.push(file)   //判断当前有没有这个.children数组
        else folderItem.children = [file]
      }
    }
    folderItem.type = 'folder'
    return folderItem
  })
}

//处理哪个文件夹是哪个文件夹的子集的问题
export const transferFolderToTree = folderList =>{
  if(!folderList.length) return []
  const folderListCloned = clonedeep(folderList)
  const handle = id => {
    let arr = []
    folderListCloned.forEach(folder => {
      if (folder.folder_id == id ){
        const children = handle(folder.id)  //获取到的是当前文件夹的子集文件夹
        if (folder.children) folder.children = [].concat(folder.children,children)   //子集文件，子集文件夹
        else folder.children = children
        folder.title = folder.name
        arr.push(folder)
      }
    })
    return arr
  }
  return handle(0)
}


export const expandSpecifiedFolder = (vm,folderTree,id) => {
  return folderTree.map(item => {
    if (item.type == 'folder'){
      if (item.id == id){
        // item.expand = true
        vm.$set(item,'expand',true)
      } else {
        if (item.children && item.children.length){
          item.children = expandSpecifiedFolder(vm,item.children,id)
          if (item.children.some(child => {
            return child.expand == true
          })){
            // item.expand = true
            vm.$set(item,'expand',true)
          }else {
            // item.expand = false
            vm.$set(item,'expand',false)
          }
        }
      }
    }
    return item
  })
}
