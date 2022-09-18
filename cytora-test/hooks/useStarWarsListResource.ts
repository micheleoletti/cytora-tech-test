import PaginatedResult from "../models/paginated-result";
import { fetcher } from "../utils/fetcher";
import useSWR from "swr";
import { useToast } from "@chakra-ui/react";
import { useEffect } from "react";

export default function useStarWarsListResource<T>(
  url: string | null,
  search: string | null = null
) {
  const keys = url != null ? [url, search] : null;

  const { data, error } = useSWR<PaginatedResult<T>>(keys, fetcher);

  const toastId = `${url}-list-request-error`;
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

  return { data: data, error };
}
