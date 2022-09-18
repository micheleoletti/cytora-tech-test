import { Planet } from "../models/api";
import useStarWarsListResource from "./useStarWarsListResource";

export default function usePlanetList(filter: string) {
  const { data, error } = useStarWarsListResource<Planet>("/planets");

  return {
    planetList: data,
    isLoading: !error && !data,
    isError: error,
  };
}
