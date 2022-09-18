import { Button, Heading, Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import SearchBar from "./SearchBar";
import { BsHeartFill } from "react-icons/bs";

export default function Header() {
  const router = useRouter();

  function goToIndex() {
    router.push("/");
  }

  function goToFavourites() {
    router.push("/people/favourites");
  }

  return (
    <Stack
      direction={"row"}
      w={"full"}
      justifyContent={"space-between"}
      cursor={"pointer"}
    >
      <Stack direction={"row"} onClick={goToIndex}>
        <Heading color={"gray.600"} fontWeight={"black"}>
          Cytora
        </Heading>
        <Heading color={"orange.300"} fontWeight={"extrabold"}>
          Star Wars
        </Heading>
      </Stack>

      <Stack direction={"row"}>
        <Button
          colorScheme={"red"}
          variant={"ghost"}
          leftIcon={<BsHeartFill />}
          onClick={goToFavourites}
        >
          Go to Favourites
        </Button>
        <SearchBar></SearchBar>
      </Stack>
    </Stack>
  );
}
