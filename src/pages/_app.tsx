import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Metadata from "@/components/Metadata";
import theme from "../../theme";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Metadata />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
