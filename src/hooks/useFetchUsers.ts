import useSWR from "swr";
import axios from "axios";

const fetcher = async (url: string) => {
  const response = await axios.get(url);
  return response.data;
};

export const useFetchUsers = () => {
  const {
    data: users,
    error,
    mutate,
  } = useSWR("https://jsonplaceholder.typicode.com/users", fetcher);

  const isLoading = !users && !error;

  return { users, error, isLoading, mutate };
};
