import { chain, createClient } from 'wagmi'

import {
  apiProvider,
  configureChains,
  getDefaultWallets,
} from '@rainbow-me/rainbowkit'

export const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  [
    apiProvider.alchemy(process.env.NEXT_PUBLIC_ALCHEMY_ID),
    apiProvider.fallback(),
  ]
)

const { connectors } = getDefaultWallets({
  appName: 'my app name',
  chains,
})

export const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
})
