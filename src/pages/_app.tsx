import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Metadata from "@/components/Metadata";
import theme from "../../theme";
import { WagmiConfig } from "wagmi";
import wagmiClient, { chains } from "../../utils/wagmiConfig";
import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Metadata />
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains} theme={darkTheme()}>
          <Component {...pageProps} />
        </RainbowKitProvider>
      </WagmiConfig>
    </ChakraProvider>
  );
}
