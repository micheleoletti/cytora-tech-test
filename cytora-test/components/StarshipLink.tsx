import { Link, LinkProps, Spinner, Tag } from "@chakra-ui/react";
import { useRouter } from "next/router";
import useStarshipDetail from "../hooks/useStarshipDetail";
import getIdFromUrl from "../utils/getIdFromUrl";
import LazyPrettyLink from "./LazyPrettyLink";

interface StarshipLinkProps extends LinkProps {
  starshipUrl: string;
}
export function StarshipLink({ starshipUrl }: StarshipLinkProps) {
  const id = getIdFromUrl(starshipUrl);
  const { starshipDetail, isLoading } = useStarshipDetail(id);

  return (
    <LazyPrettyLink isLoading={isLoading} url={`/starships/${id}`}>
      {starshipDetail?.name}
    </LazyPrettyLink>
  );
}
