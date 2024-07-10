"use client";
import useSWR from "swr";
import { fetcher } from "./fetcher";

export const useFetch = (url: string) => {
  const { data, error, mutate } = useSWR(url, fetcher);
  return {
    data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
};
