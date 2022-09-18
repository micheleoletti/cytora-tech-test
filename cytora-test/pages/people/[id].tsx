import { Divider, Heading, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import MainLayout from "../../components/layouts/main-layout";
import { PlanetLink } from "../../components/PlanetLink";
import { StarshipLink } from "../../components/StarshipLink";
import usePeopleDetail from "../../hooks/usePeopleDetail";

/**
 * Character bio page with links to home planet and star ships pages.
 * @returns
 */
export default function CharacterBio() {
  const router = useRouter();
  const { id } = router.query;

  const { peopleDetail, isLoading } = usePeopleDetail(id as string);

  return (
    <MainLayout isLoading={isLoading}>
      {peopleDetail && (
        <Stack direction={"column"} spacing={4}>
          <Heading fontWeight={"black"} size={"2xl"}>
            {peopleDetail?.name}
          </Heading>

          <Stack direction={"row"}>
            <Text fontWeight={"bold"}>Eye color:</Text>
            <Text>{peopleDetail?.eye_color}</Text>
          </Stack>

          <Stack direction={"row"}>
            <Text fontWeight={"bold"}>Height:</Text>
            <Text>{peopleDetail?.height}cm</Text>
          </Stack>

          <Stack direction={"row"}>
            <Text fontWeight={"bold"}>Mass:</Text>
            <Text>{peopleDetail?.mass}kg</Text>
          </Stack>

          <Divider></Divider>
          <Stack direction={"row"} fontSize={"xl"}>
            <Text fontWeight={"bold"}>Homeworld: </Text>
            <PlanetLink planetUrl={peopleDetail?.homeworld}></PlanetLink>
          </Stack>

          {peopleDetail && peopleDetail?.starships.length > 0 && (
            <Stack direction={"row"} fontSize={"xl"}>
              <Text fontWeight={"bold"}>Starships: </Text>
              {peopleDetail?.starships.map((starship) => {
                return (
                  <StarshipLink
                    key={starship}
                    starshipUrl={starship}
                  ></StarshipLink>
                );
              })}
            </Stack>
          )}
        </Stack>
      )}
    </MainLayout>
  );
}
