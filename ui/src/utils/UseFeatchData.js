import axios from "axios";
import { useMutation, useQuery } from "react-query";

const featchData = async (route) => {
  console.log(await axios.post(`http://localhost:8801/api/${route}`));
  return axios.post(`http://localhost:8801/api/${route}`, {
    withCredentials: true,
  });
};
const featchDataById = (route, id) => {
  return axios.get(`${import.meta.env.VITE_REACT_APP_API_URL}/${route}/${id}`);
};

export const useFeathData = (key, route, onSuccess, onError) => {
  return useQuery(key, () => featchData(route), {
    onSuccess,
    onError,
    select: (data) => {
      console.log("ssss", data);
      const AllData = data.data.map((item) => item);
      return AllData;
    },
  });
};
export const useFeathDataById = (key, id, route) => {
  return useQuery([key, id], () => featchDataById(route, id), {});
};

// Post Reaquest
export const useApiMutation = (url, method = "post") => {
  const apiUrl = `${import.meta.env.VITE_REACT_APP_API_URL}${url}`;
  const apiMutation = async (data) => {
    const response = await axios({
      method,
      url: apiUrl,
      data,
      withCredentials: true,
    });

    return response.data;
  };

  return useMutation(apiMutation);
};
// get Reaquest
export const useApiQuery = (key, url) => {
  const apiUrl = `${import.meta.env.VITE_REACT_APP_API_URL}${url}`;
  const apiQuery = async () => {
    const response = await axios.get(apiUrl, { withCredentials: true });
    return response.data;
  };

  return useQuery(key, apiQuery);
};
//
// export const useApiQuery = (url, id) => {
//   const apiUrl = id
//     ? `${import.meta.env.VITE_REACT_APP_API_URL}${url}/${id}`
//     : `${import.meta.env.VITE_REACT_APP_API_URL}${url}`;
//   const apiQuery = async () => {
//     const response = await axios.get(apiUrl, { withCredentials: true });

//     return response.data;
//   };

//   return useQuery([url, id], apiQuery);
// };
