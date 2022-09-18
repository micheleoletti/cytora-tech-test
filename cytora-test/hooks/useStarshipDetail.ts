import { Starship } from "../models/api";
import useStarWarsDetailResource from "./useStarWarsDetailResource";

export default function useStarshipDetail(id: string | undefined) {
  const { data, error } = useStarWarsDetailResource<Starship>(
    `/starships/`,
    id
  );

  return { starshipDetail: data, isLoading: !error && !data, isError: error };
}
