import axios from "axios";
import { useMutation, useQuery } from "react-query";

const URL = "http://localhost:8801/api";

const featchData = (route) => {
  return axios.post(`http://localhost:8801/api/auth/login`);
};

const featchDataById = (route, id) => {
  return axios.get(`${URL}/${route}/${id}`);
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

export const useMutate = (key, route, onSuccess, onError) => {
  return useMutation(key, () => featchData(route), {
    onSuccess,
    onError,
  });
};
