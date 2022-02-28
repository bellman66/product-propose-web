import { useApiUserInfoByToken } from "/utils/api";

export default function useUserInfo() {
    // Swr
    const { data, error } = useApiUserInfoByToken()
  
    const loading = !error && !data;
    const loggedIn = !error && data;

    return {
      loading,
      loggedIn,
      data,
      error
    };
  }