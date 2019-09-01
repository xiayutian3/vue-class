import clonedeep from 'clonedeep'
import {doCustomTimes, objEqual} from "./tools";

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



export const routeEqual = (route1,route2) => {
  const params1 = route1.params || {}
  const params2 = route2.params || {}
  const query1 = route1.query || {}
  const query2 = route2.query || {}
  return route1.name === route2.name && objEqual(params1,params2) && objEqual(query1,query2)
}


export const routeHasExist = (tabList,routeItem) => {
  let len = tabList.length
  let res = false
  doCustomTimes(len,(index)=>{
    if (routeEqual(tabList[index],routeItem)) res = true
  })
  return res
}






const getKeyValueArr = obj => {
  let arr = []
  Object.entries(obj).sort((a,b)=>{
    return a[0]-b[0]
  }).forEach(([_key,_val])=>{
    arr.push(_key,_val)
  })
  return arr
}

export const getTabNameByRoute = route => {
  const {name,params,query} = route
  let res = name
  if (params && Object.keys(params).length) res += ':'+ getKeyValueArr(params).join('_')
  if (query && Object.keys(query).length) res += '&'+ getKeyValueArr(query).join('_')
  return res
}




export const getObjBySplitStr = (id, splitStr) => {
  let splitArr = id.split(splitStr)
  let str = splitArr[splitArr.length - 1]
  let keyValArr = str.split('_')
  let res = {}
  let i = 0
  let len = keyValArr.length
  while(i<len){
    res[keyValArr[i]] = keyValArr[i+1]
    i += 2
  }
  return res
}


export const getRouteById = id => {
  let res = {}
  if (id.includes('&')){
    res.query = getObjBySplitStr(id,'&')
    id = id.split('&')[0]
  }
  if (id.includes(':')){
    res.params = getObjBySplitStr(id,':')
    id = id.split(':')[0]
  }

  res.name = id
  return res
}



export const getOpenArrByName = (name,routerList) => {
  let arr = []
  routerList.some(item =>{
    if (item.name == name){
      arr.push(item.name)
      return true
    }
    if (item.children && item.children.length){
      let childArr = getOpenArrByName(name,item.children)
      if (childArr.length){
        arr = arr.concat(item.name,childArr)
        return true
      }
    }
  })
  return arr
}

export const localSave = (name,value) => {
  localStorage.setItem(name,value)
}

export const localRead = (name) => {
  return localStorage.getItem(name)
}
