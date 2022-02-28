import useApiServerCheck from "/utils/api";

export default function useServerCheck() {
    // Swr
    const { data, error } = useApiServerCheck()

    return {
        serverDown : error
    };
  }