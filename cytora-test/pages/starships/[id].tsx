import { Divider, Heading, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import MainLayout from "../../components/layouts/main-layout";
import { PeopleLink } from "../../components/PeopleLink";
import useStarshipDetail from "../../hooks/useStarshipDetail";

/**
 * Starship bio page with links to pilots.
 * @returns
 */
export default function StarshipBio() {
  const router = useRouter();
  const { id } = router.query;

  const { starshipDetail, isLoading } = useStarshipDetail(id as string);

  return (
    <MainLayout isLoading={isLoading}>
      {starshipDetail && (
        <Stack direction={"column"} spacing={4}>
          <Heading fontWeight={"black"} size={"2xl"}>
            {starshipDetail?.name}
          </Heading>

          <Stack direction={"row"}>
            <Text fontWeight={"bold"}>Model:</Text>
            <Text>{starshipDetail?.model}</Text>
          </Stack>
          <Stack direction={"row"}>
            <Text fontWeight={"bold"}>Length:</Text>
            <Text>{starshipDetail?.length}</Text>
          </Stack>
          <Stack direction={"row"}>
            <Text fontWeight={"bold"}>Cargo capacity:</Text>
            <Text>{starshipDetail?.cargo_capacity}</Text>
          </Stack>

          <Divider></Divider>

          {starshipDetail && starshipDetail?.pilots.length > 0 && (
            <Stack
              direction={"row"}
              fontSize={"xl"}
              flexWrap={"wrap"}
              rowGap={2}
            >
              <Text fontWeight={"bold"}>Pilots: </Text>
              {starshipDetail?.pilots.map((people) => {
                return (
                  <PeopleLink
                    key={people as string}
                    peopleUrl={people as string}
                  ></PeopleLink>
                );
              })}
            </Stack>
          )}
        </Stack>
      )}
    </MainLayout>
  );
}
