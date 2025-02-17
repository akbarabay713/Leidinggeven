"use client";

import { useQuery, QueryKey } from "@tanstack/react-query";
import axiosInstance from "../lib/axiosInstance";

async function fetchData<T>(url: string): Promise<T> {
  const { data } = await axiosInstance.get(url);
  return data;
}

export function useFetch<T>(key: QueryKey, url: string) {
  return useQuery<T>({
    queryKey: key,
    queryFn: () => fetchData<T>(url),
    staleTime: 1000 * 60 * 5,
  });
}
