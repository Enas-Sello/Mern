import axios from "axios"
import { useQuery } from "react-query"


const NewRequest = axios.create({
  baseURL:import.meta.env.VITE_REACT_APP_API_URL,
  withCredentials: true,
})

export default NewRequest

const fetchData = (url, id) => {
  const rout = id ? `${url}/${id}` : url
  return axios.get(import.meta.env.VITE_REACT_APP_API_URL + rout, {
    withCredentials: true,
  })
}

export const useGetData = (key, url) => {
  return useQuery(key, () => fetchData(url), {
    select: (data) => {
      return data.data
    },
  })
}

export const useGetById = (key, url, id) => {
  return useQuery([key, id], () => fetchData(url, id), {
    select: (data) => {
      return data.data
    },
  })
}
