import MainLayout from "../components/layouts/main-layout";
import PeopleList from "../components/PeopleList";
import usePeopleList from "../hooks/usePeopleList";
import { People } from "../models/api";

export default function Index() {
  const { peopleList, isLoading } = usePeopleList();

  const faultyPeople: People = {
    name: "Mysterious character that generates errors",
    height: "999",
    mass: "0",
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "99999",
    gender: "male",
    homeworld: "https://swapi.dev/api/planets/1/",
    films: [
      "https://swapi.dev/api/films/1/",
      "https://swapi.dev/api/films/2/",
      "https://swapi.dev/api/films/3/",
      "https://swapi.dev/api/films/6/",
    ],
    species: [],
    vehicles: [
      "https://swapi.dev/api/vehicles/14/",
      "https://swapi.dev/api/vehicles/30/",
    ],
    starships: [
      "https://swapi.dev/api/starships/12/",
      "https://swapi.dev/api/starships/22/",
    ],
    url: "https://swapi.dev/api/people/99999999/",
  };

  return (
    <MainLayout isLoading={isLoading}>
      <PeopleList
        peopleList={[...(peopleList?.results ?? []), faultyPeople]}
      ></PeopleList>
    </MainLayout>
  );
}
