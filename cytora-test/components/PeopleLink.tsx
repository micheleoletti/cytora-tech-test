import { Link, LinkProps, Spinner, Tag } from "@chakra-ui/react";
import { useRouter } from "next/router";
import usePeopleDetail from "../hooks/usePeopleDetail";
import getIdFromUrl from "../utils/getIdFromUrl";
import LazyPrettyLink from "./LazyPrettyLink";

interface PeopleLinkProps extends LinkProps {
  peopleUrl: string;
}
export function PeopleLink({ peopleUrl }: PeopleLinkProps) {
  const id = getIdFromUrl(peopleUrl);
  const { peopleDetail, isLoading } = usePeopleDetail(id);

  return (
    <LazyPrettyLink isLoading={isLoading} url={`/people/${id}`}>
      {peopleDetail?.name}
    </LazyPrettyLink>
  );
}
