import { Grid, GridItem } from "@chakra-ui/react";
import { People } from "../models/api";
import PeopleCard from "./PeopleCard";

interface PeopleListProps {
  peopleList: People[];
}
export default function PeopleList({ peopleList }: PeopleListProps) {
  return (
    <Grid templateColumns={["1fr", "repeat(3, 1fr)"]} w={"full"} gap={8}>
      {peopleList.map((people) => {
        return (
          <GridItem key={people.url}>
            <PeopleCard people={people}></PeopleCard>
          </GridItem>
        );
      })}
    </Grid>
  );
}
