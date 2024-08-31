import { createConfig, http } from "wagmi";
import { mainnet, sepolia, rootPorcini } from "wagmi/chains";
import { metaMask } from "wagmi/connectors";

export const config = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [rootPorcini.id]: http(),
  },
});
