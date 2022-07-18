import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import theme from "../constants/theme";

import "../style/main.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
