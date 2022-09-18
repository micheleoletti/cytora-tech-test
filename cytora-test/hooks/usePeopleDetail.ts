import { People } from "../models/api";
import useStarWarsDetailResource from "./useStarWarsDetailResource";

export default function usePeopleDetail(id: string | undefined) {
  const { data, error } = useStarWarsDetailResource<People>(`/people/`, id);

  return { peopleDetail: data, isLoading: !error && !data, isError: error };
}
