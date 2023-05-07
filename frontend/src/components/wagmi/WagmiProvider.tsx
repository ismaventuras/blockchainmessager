'use client'

import '@rainbow-me/rainbowkit/styles.css';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { moonbaseAlpha, mainnet, moonbeam, moonriver, arbitrum, arbitrumGoerli, avalancheFuji, avalanche, polygon, polygonMumbai, bsc, bscTestnet } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import {
    getDefaultWallets,
    lightTheme,
    RainbowKitProvider
} from '@rainbow-me/rainbowkit';
import type { ReactNode } from 'react';

const { chains, provider } = configureChains(
    [mainnet, moonbaseAlpha, moonbeam, moonriver, arbitrum, arbitrumGoerli, avalancheFuji, avalanche, polygon, polygonMumbai, bsc, bscTestnet],
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


export default function WagmiProvider({ children }: { children: ReactNode }) {
    return (
        <WagmiConfig client={wagmiClient}>
            <RainbowKitProvider
                chains={chains}
                theme={lightTheme({
                    overlayBlur: 'large',

                })}
            >
                {children}
            </RainbowKitProvider>
        </WagmiConfig>
    )
}
