import { Link, LinkProps, Spinner, Tag } from "@chakra-ui/react";
import { useRouter } from "next/router";
import usePlanetDetail from "../hooks/usePlanetDetail";
import getIdFromUrl from "../utils/getIdFromUrl";

interface PlanetLinkProps extends LinkProps {
  planetUrl: string;
}
export function PlanetLink({ planetUrl }: PlanetLinkProps) {
  const router = useRouter();
  const id = getIdFromUrl(planetUrl);
  const { planetDetail, isLoading } = usePlanetDetail(id);

  function goToPlanetDetail() {
    router.push(`/planets/${id}`);
  }

  return (
    <Tag colorScheme={"orange"} borderRadius={"xl"}>
      {isLoading && <Spinner size={"sm"} opacity={0.3}></Spinner>}

      <Link onClick={goToPlanetDetail}>{planetDetail?.name}</Link>
    </Tag>
  );
}
