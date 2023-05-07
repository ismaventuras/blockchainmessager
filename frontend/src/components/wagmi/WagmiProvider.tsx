'use client'

import '@rainbow-me/rainbowkit/styles.css';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { moonbaseAlpha, mainnet ,} from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import {
    getDefaultWallets,  
    RainbowKitProvider  
} from '@rainbow-me/rainbowkit';
import type { ReactNode } from 'react';

const { chains, provider } = configureChains(
    [mainnet, moonbaseAlpha],
    [
      publicProvider()
    ]
);

const { connectors } = getDefaultWallets({
    appName: 'blockchainmessager',
    chains
  });

const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider
})


export default function WagmiProvider({children}: {children:ReactNode}){
    return(
        <WagmiConfig client={wagmiClient}>
            <RainbowKitProvider chains={chains}>
                {children}
            </RainbowKitProvider>
        </WagmiConfig>
    )
}
