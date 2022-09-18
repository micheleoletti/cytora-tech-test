import { Button, Heading, Stack, Text } from "@chakra-ui/react";
import router, { useRouter } from "next/router";
import { useFavourite } from "../contexts/favourite-context";
import { People } from "../models/api";
import getIdFromUrl from "../utils/getIdFromUrl";
import { BsHeart, BsHeartFill } from "react-icons/bs";

interface PeopleCardProps {
  people: People;
}
export default function PeopleCard({ people }: PeopleCardProps) {
  const router = useRouter();
  const { toggleFavourite, hasFavourite } = useFavourite();

  function goToPeopleBio() {
    router.push(`/people/${getIdFromUrl(people.url)}`);
  }

  return (
    <Stack
      h={"full"}
      w={"full"}
      // onClick={goToPeopleBio}
    >
      <Stack
        h={"full"}
        borderWidth={"1px"}
        borderColor={"gray.100"}
        borderRadius={"xl"}
        p={4}
        direction={"column"}
        position={"relative"}
        justifyContent={"space-between"}
      >
        <Stack>
          <Heading fontWeight={"black"}>{people.name}</Heading>
          <PeopleCardData
            label="Birth date:"
            value={people.birth_year}
          ></PeopleCardData>

          <PeopleCardData
            label="Height:"
            value={people.height}
          ></PeopleCardData>
        </Stack>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Button onClick={goToPeopleBio}>Go to Bio</Button>
          <Button
            variant={"ghost"}
            colorScheme={"red"}
            onClick={() => {
              toggleFavourite!(people);
            }}
          >
            {hasFavourite!(people) ? <BsHeartFill /> : <BsHeart />}
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}

interface PeopleCardDataProps {
  label: string;
  value: string;
}
export function PeopleCardData({ label, value }: PeopleCardDataProps) {
  return (
    <Stack direction={"row"} color={"gray.500"}>
      <Text fontWeight={"bold"}>{label}</Text>
      <Text>{value}</Text>
    </Stack>
  );
}
