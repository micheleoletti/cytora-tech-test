import { Heading, Stack } from "@chakra-ui/react";
import MainLayout from "../../components/layouts/main-layout";
import PeopleList from "../../components/PeopleList";
import { useFavourite } from "../../contexts/favourite-context";
import { BsHeartFill } from "react-icons/bs";

export default function FavouritePeople() {
  const { favouritePeople } = useFavourite();

  return (
    <MainLayout>
      <Stack
        pl={4}
        pb={6}
        direction={"row"}
        alignItems={"center"}
        color={"red.600"}
        spacing={4}
      >
        <BsHeartFill fontSize={"24px"} />
        <Heading fontWeight={"black"}>Favourites</Heading>
      </Stack>

      {favouritePeople?.length == 0 && (
        <Heading size={"md"} color={"gray.300"} textAlign={"center"}>
          You have no favourite Star Wars characters!
        </Heading>
      )}
      <PeopleList peopleList={favouritePeople ?? []}></PeopleList>
    </MainLayout>
  );
}
