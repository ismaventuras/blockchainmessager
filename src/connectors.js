import { InjectedConnector } from '@web3-react/injected-connector'
import {NetworkConnector} from '@web3-react/network-connector'

import { allowedNetworks, defaultChain , RPC_URLS_FRONT as RPC_URLS } from './globalInfo'


export const injected = new InjectedConnector({supportedChainIds: allowedNetworks})

export const network = new NetworkConnector({
    urls: {
        1: RPC_URLS.ethereum,
        4: RPC_URLS.rinkeby,
        56: RPC_URLS.binance,
        97: RPC_URLS.binance_testnet,
        137: RPC_URLS.polygon,
        1284: RPC_URLS.moonriver,
        1285: RPC_URLS.moonbeam,
        1287: RPC_URLS.moonbase,
        1337: RPC_URLS.local,
        80001: RPC_URLS.mumbai,
    },
    defaultChainId: defaultChain//1337
})