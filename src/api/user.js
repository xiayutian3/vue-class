import axios from 'axios'


export const getUserInfo = ({userId}) =>{
  return axios({
    url:'/index/getUserInfo',
    methods:'post',
    data:{
      userId
    }
  })
}

export const login = ({userName,password})=>{
  return axios({
    url:'/index/login',
    methods:'post',
    data:{
      userName,
      password
    }
  })
}

export const authorization = () => {
  return axios.request({
    url: '/users/authorization',
    method: 'get'
  })
}
