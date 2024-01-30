import axios from "axios"
import { useMutation } from "react-query"

const postData = (url, data,id) => {
  const rout = id ? `${url}/${id}` : url
  return axios.post(import.meta.env.VITE_REACT_APP_API_URL + rout, data, {
    withCredentials: true,
  })
}

export const useAddData = (url) => {
  return useMutation((data) => postData(url, data))
}
