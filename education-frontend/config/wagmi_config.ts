import { http, createConfig } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';
import { injected, metaMask, safe, coinbaseWallet } from 'wagmi/connectors';

export const config = createConfig({
  chains: [mainnet, sepolia],
  connectors: [
    injected(),
    metaMask({
      dappMetadata: {
        name: "Example Wagmi dapp",
      },
    }),
    safe({
      allowedDomains: [/app.safe.global$/], 
    }),
    coinbaseWallet({
      appName: 'My Wagmi App',
    }),
  ],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
})