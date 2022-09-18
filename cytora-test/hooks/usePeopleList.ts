import { People } from "../models/api";
import useStarWarsListResource from "./useStarWarsListResource";

export default function usePeopleList(search: string | null = null) {
  const { data, error } = useStarWarsListResource<People>("/people", search);

  return {
    peopleList: data,
    isLoading: !error && !data,
    isError: error,
  };
}
