import { Planet } from "../models/api";
import useStarWarsDetailResource from "./useStarWarsDetailResource";

export default function usePlanetDetail(id: string | undefined) {
  const { data, error } = useStarWarsDetailResource<Planet>(`/planets/`, id);

  return { planetDetail: data, isLoading: !error && !data, isError: error };
}
