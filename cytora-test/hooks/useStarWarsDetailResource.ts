import { useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import useSWR from "swr";
import { fetcher } from "../utils/fetcher";

export default function useStarWarsDetailResource<T>(url: string, id?: string) {
  const key = id ? `${url}${id}` : null;
  const { data, error } = useSWR<T>(key, fetcher);

  const toastId = `${key}-detail-request-error`;
  const toast = useToast();

  useEffect(() => {
    if (error && !toast.isActive(toastId)) {
      toast({
        id: toastId,
        title: "An error has occurred",
        description: "Try to reload the page.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  }, [error]);

  return { data, error };
}
