import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { User } from "@/src/types/User";
import { useFetch } from "./useFetchData";
import { setUsers } from "../stores/slices/userSlice";

export function useUsers() {
  const dispatch = useDispatch();
  const { data, error, isLoading } = useFetch<User[]>(["users"], "/users");

  useEffect(() => {
    if (data) {
      dispatch(setUsers(data));
    }
  }, [data, dispatch]);

  return { data, error, isLoading };
}
