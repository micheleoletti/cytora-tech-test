import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { FavouriteProvider } from "../contexts/favourite-context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Cytora Star Wars</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <ChakraProvider>
        <FavouriteProvider>
          <Component {...pageProps} />
        </FavouriteProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
