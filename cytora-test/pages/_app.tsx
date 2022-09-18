import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { FavouriteProvider } from "../contexts/favourite-context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <FavouriteProvider>
        <Component {...pageProps} />
      </FavouriteProvider>
    </ChakraProvider>
  );
}

export default MyApp;
