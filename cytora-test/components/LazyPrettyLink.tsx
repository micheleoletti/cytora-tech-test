import { Tag, Spinner, Link } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { PropsWithChildren } from "react";

interface LazyPrettyLinkProps extends PropsWithChildren {
  url: string;
  isLoading: boolean;
}
export default function LazyPrettyLink({
  url,
  isLoading,
  children,
}: LazyPrettyLinkProps) {
  const router = useRouter();

  function goToUrl() {
    router.push(url);
  }

  return (
    <Tag colorScheme={"orange"} borderRadius={"xl"} minH={8}>
      {isLoading && <Spinner size={"sm"} opacity={0.3}></Spinner>}

      <Link onClick={goToUrl}>{children}</Link>
    </Tag>
  );
}
