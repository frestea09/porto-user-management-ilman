// utils/api.js
import { axioInstance } from "./axiosInstance";
export const createData = async (url: string, data: any) => {
  const response = await axioInstance.post(url, data);
  console.log(response);
  return response.data;
};

export const updateData = async (url: string, data: string) => {
  const response = await axioInstance.put(url, data);
  return response.data;
};

export const deleteData = async (url: string) => {
  const response = await axioInstance.delete(url);
  return response.data;
};
