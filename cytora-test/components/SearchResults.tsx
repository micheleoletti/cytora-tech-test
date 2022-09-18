import { Button, Divider, Stack, StackProps, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { PropsWithChildren } from "react";
import { People, Planet, Starship } from "../models/api";
import getIdFromUrl from "../utils/getIdFromUrl";

interface SearchResultsProps extends StackProps {
  peopleData?: People[];
  planetData?: Planet[];
  starshipData?: Starship[];
  onResultClicked: () => void;
}
export default function SearchResults({
  peopleData = [],
  planetData = [],
  starshipData = [],
  onResultClicked,
  ...stackProps
}: SearchResultsProps) {
  const router = useRouter();

  function shouldRender(items: any[]) {
    return items.length > 0;
  }

  function goToPeopleDetail(url: string) {
    onResultClicked();
    const id = getIdFromUrl(url);
    router.push(`/people/${id}`);
  }

  function goToPlanetDetail(url: string) {
    onResultClicked();
    const id = getIdFromUrl(url);
    router.push(`/planets/${id}`);
  }

  function goToStarshipDetail(url: string) {
    onResultClicked();
    const id = getIdFromUrl(url);
    router.push(`/starships/${id}`);
  }

  return (
    <Stack
      {...stackProps}
      direction={"column"}
      w={"full"}
      p={4}
      maxH={"200px"}
      overflow={"scroll"}
      bg={"white"}
      zIndex={"popover"}
      boxShadow={"lg"}
      borderRadius={"xl"}
    >
      {shouldRender(peopleData) && (
        <SearchResultGroup groupTitle="Characters">
          {peopleData?.map((people) => {
            return (
              <Button
                size={"sm"}
                fontWeight={"medium"}
                variant={"ghost"}
                key={people.url}
                onClick={() => {
                  goToPeopleDetail(people.url);
                }}
              >
                {people.name}
              </Button>
            );
          })}
          <Divider></Divider>
        </SearchResultGroup>
      )}

      {shouldRender(planetData) && (
        <SearchResultGroup groupTitle="Planets">
          {planetData?.map((planet) => {
            return (
              <Button
                size={"sm"}
                fontWeight={"medium"}
                variant={"ghost"}
                key={planet.url}
                onClick={() => {
                  goToPlanetDetail(planet.url);
                }}
              >
                {planet.name}
              </Button>
            );
          })}
          <Divider></Divider>
        </SearchResultGroup>
      )}

      {shouldRender(starshipData) && (
        <SearchResultGroup groupTitle="Starships">
          {starshipData?.map((starship) => {
            return (
              <Button
                fontWeight={"medium"}
                size={"sm"}
                variant={"ghost"}
                key={starship.url}
                onClick={() => {
                  goToStarshipDetail(starship.url);
                }}
              >
                {starship.name}
              </Button>
            );
          })}
        </SearchResultGroup>
      )}
    </Stack>
  );
}

interface SearchResultGroupProps extends PropsWithChildren {
  groupTitle: string;
}
export function SearchResultGroup({
  groupTitle,
  children,
}: SearchResultGroupProps) {
  return (
    <Stack direction={"column"} alignItems={"start"}>
      <Text fontWeight={"bold"} fontSize={"lg"}>
        {groupTitle}
      </Text>
      {children}
    </Stack>
  );
}
