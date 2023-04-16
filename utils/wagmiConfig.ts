import {
  connectorsForWallets,
  getDefaultWallets,
} from "@rainbow-me/rainbowkit";
import { configureChains, createClient } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { polygon } from "wagmi/chains";
import {
  injectedWallet,
  rainbowWallet,
  metaMaskWallet,
  coinbaseWallet,
  walletConnectWallet,
  ledgerWallet,
} from "@rainbow-me/rainbowkit/wallets";

console.log(process.env.NEXT_APP_ALCHEMY_ID);

export const { chains, provider } = configureChains(
  [polygon],
  [
    alchemyProvider({ apiKey: process.env.NEXT_APP_ALCHEMY_ID || "" }),
    publicProvider(),
  ]
);

const connectors = connectorsForWallets([
  {
    groupName: "Popular",
    wallets: [
      injectedWallet({ chains }),
      metaMaskWallet({ chains }),
      ledgerWallet({ chains }),
      coinbaseWallet({ chains, appName: "Starrdev Portfolio" }),
      walletConnectWallet({ chains }),
      rainbowWallet({ chains }),
    ],
  },
]);

const wagmiClient = createClient({
  autoConnect: false,
  connectors,
  provider,
});

export default wagmiClient;
