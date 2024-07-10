import { axioInstance } from "./axiosInstance";

export const fetcher = async (url: string) =>
  await axioInstance.get(url).then((res) => res.data);
