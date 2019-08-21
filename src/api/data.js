import axios from 'axios'

export const sentFormData = ({url,data}) => {
  return axios({
    url,
    data,
    method:'post'
  })
}
