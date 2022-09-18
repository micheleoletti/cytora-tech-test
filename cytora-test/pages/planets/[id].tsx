import { Divider, Heading, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import MainLayout from "../../components/layouts/main-layout";
import { PeopleLink } from "../../components/PeopleLink";
import usePlanetDetail from "../../hooks/usePlanetDetail";

/**
 * Planet bio page with links to residents.
 * @returns
 */
export default function PlanetBio() {
  const router = useRouter();
  const { id } = router.query;

  const { planetDetail, isLoading } = usePlanetDetail(id as string);

  return (
    <MainLayout isLoading={isLoading}>
      {planetDetail && (
        <Stack direction={"column"} spacing={4}>
          <Heading fontWeight={"black"} size={"2xl"}>
            {planetDetail?.name}
          </Heading>
          <Stack direction={"row"}>
            <Text fontWeight={"bold"}>Climate:</Text>
            <Text>{planetDetail?.climate}</Text>
          </Stack>
          <Stack direction={"row"}>
            <Text fontWeight={"bold"}>Diameter:</Text>
            <Text>{planetDetail?.diameter}km</Text>
          </Stack>
          <Stack direction={"row"}>
            <Text fontWeight={"bold"}>Population:</Text>
            <Text>{planetDetail?.population}</Text>
          </Stack>
          <Divider></Divider>
          {planetDetail && planetDetail?.residents.length > 0 && (
            <Stack
              direction={"row"}
              fontSize={"xl"}
              flexWrap={"wrap"}
              rowGap={2}
            >
              <Text fontWeight={"bold"}>Residents: </Text>
              {planetDetail?.residents.map((people) => {
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
