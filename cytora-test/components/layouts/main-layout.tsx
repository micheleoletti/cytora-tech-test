import { Box, Divider, Spinner, Stack } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import Header from "../Header";

interface MainLayoutProps extends PropsWithChildren {
  isLoading?: boolean;
}

export default function MainLayout({
  isLoading = false,
  children,
}: MainLayoutProps) {
  return (
    <Stack direction={"column"} p={4} spacing={4}>
      <Header></Header>

      <Divider></Divider>

      {isLoading && (
        <Stack direction={"row"} justifyContent={"center"}>
          <Spinner thickness="3px"></Spinner>
        </Stack>
      )}
      <Box pt={4}>{children}</Box>
    </Stack>
  );
}
