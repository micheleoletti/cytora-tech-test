import { People, Planet, Starship } from "../models/api";
import useStarWarsListResource from "./useStarWarsListResource";

const minSearchChars = 2;

export default function useSearch(search: string) {
  const { data: peopleData, error: peopleError } =
    useStarWarsListResource<People>(
      search.length >= minSearchChars ? "/people" : null,
      search
    );

  const { data: planetData, error: planetError } =
    useStarWarsListResource<Planet>(
      search.length >= minSearchChars ? "/planets" : null,
      search
    );

  const { data: starshipData, error: starshipError } =
    useStarWarsListResource<Starship>(
      search.length >= minSearchChars ? "/starships" : null,
      search
    );

  return {
    peopleData,
    planetData,
    starshipData,
    isLoading:
      !peopleData &&
      !peopleError &&
      !planetData &&
      !planetError &&
      !starshipData &&
      !starshipError,
    isError: peopleError || planetError || starshipError,
  };
}
