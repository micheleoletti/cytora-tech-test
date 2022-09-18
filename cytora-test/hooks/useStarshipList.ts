import { Starship } from "../models/api";
import useStarWarsListResource from "./useStarWarsListResource";

export default function useStarshipList(search: string | null = null) {
  const { data, error } = useStarWarsListResource<Starship>(
    "/starship",
    search
  );

  return {
    starshipList: data,
    isLoading: !error && !data,
    isError: error,
  };
}
