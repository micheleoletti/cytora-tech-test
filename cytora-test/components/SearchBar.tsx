import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Stack,
} from "@chakra-ui/react";
import { ChangeEvent, KeyboardEventHandler, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import useSearch from "../hooks/useSearch";
import SearchResults from "./SearchResults";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  const { peopleData, planetData, starshipData } = useSearch(search);
  const [showSearchResults, setShowSearchResults] = useState(false);

  function handleSearchChange(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  useEffect(() => {
    checkResults();
  }, [peopleData, planetData, starshipData]);

  function checkResults() {
    const show =
      ((peopleData && peopleData.results.length > 0) ||
        (planetData && planetData.results.length > 0) ||
        (starshipData && starshipData.results.length > 0)) ??
      false;

    if (show != showSearchResults) setShowSearchResults(show);
  }

  return (
    <Stack
      pos={"relative"}
      direction={"column"}
      spacing={0}
      minW={["full", "400px"]}
    >
      <InputGroup justifyContent={"center"} position={"relative"}>
        <InputLeftElement pointerEvents="none" color={"gray.300"}>
          <FaSearch></FaSearch>
        </InputLeftElement>
        <Input
          placeholder={"Search for characters, planets or starships..."}
          value={search}
          onChange={handleSearchChange}
          onFocus={checkResults}
          onKeyUp={(e) => {
            if (e.code == "Escape") setShowSearchResults(false);
          }}
        ></Input>
      </InputGroup>
      {showSearchResults && (
        <SearchResults
          onResultClicked={() => {
            setShowSearchResults(false);
          }}
          position={"absolute"}
          top={12}
          peopleData={peopleData?.results}
          planetData={planetData?.results}
          starshipData={starshipData?.results}
        ></SearchResults>
      )}
    </Stack>
  );
}
