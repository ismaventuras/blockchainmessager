export const networkNames = {
    1: "ethereum",
    3: "ropsten",
    4: "rinkeby",
    5: "goerli",
    56: "binance",
    97: "binance_testnet",
    137: "polygon",
    1284: "moonbeam",
    1285: "moonriver",
    1287: "moonbase_alpha",
    80001: "mumbai",
}

export const RPC_URLS = {
    local: "http://localhost:8545",    
    ethereum: "https://mainnet.infura.io/v3/213f3fa10a654146b87ae1b04c1f2d6a",
    rinkeby: "https://rinkeby.infura.io/v3/3db23eaf554f4f9296c4b70f73d9a619",
    binance: "https://data-seed-prebsc-1-s1.binance.org:8545/",
    binance_testnet: "https://data-seed-prebsc-1-s1.binance.org:8545/",
    polygon: "https://matic-mainnet.chainstacklabs.com",
    mumbai: "https://matic-mumbai.chainstacklabs.com",
    moonbeam: "https://rpc.api.moonbeam.network",
    moonriver: "https://rpc.api.moonriver.moonbeam.network",
    moonbase_alpha: "https://moonbase-alpha.public.blastapi.io",
    velas: "https://evmexplorer.velas.com/rpc",
}
export const RPC_URLS_FRONT = {
    local: ["http://localhost:8545"],
    ethereum: ["https://mainnet.infura.io/v3/213f3fa10a654146b87ae1b04c1f2d6a"],
    mumbai: ["https://rpc-mumbai.matic.today"],
    rinkeby: ["https://rinkeby.infura.io/v3/3db23eaf554f4f9296c4b70f73d9a619"],
    binance_testnet: ["https://data-seed-prebsc-1-s1.binance.org:8545/"],
    binance: ["https://data-seed-prebsc-1-s1.binance.org:8545/"],
    polygon: ["https://matic-mainnet.chainstacklabs.com"],
    moonbeam: ["https://rpc.api.moonbeam.network"],
    moonriver: ["https://rpc.api.moonriver.moonbeam.network"],
    moonbase_alpha: ["https://moonbase-alpha.public.blastapi.io"],
    velas: ["https://evmexplorer.velas.com/rpc"],
}
export const allowedNetworks = [1,4,56,97,106,137,1284,1285,1287,80001]

export const defaultChain = 1

export const blockExplorerUrls = {
      1:"https://etherscan.io/",
      4:"https://rinkeby.etherscan.io/",
      56:"https://bscscan.com/",
      97:"https://testnet.bscscan.com/",
      106:"https://evmexplorer.velas.com/",
      137:"https://polygonscan.com/",
      1284:"https://moonscan.io/",
      1285:"https://moonriver.moonscan.io/",
      1287:"https://moonbase.moonscan.io/",
      80001:"https://mumbai.polygonscan.com/",
}

export const networkData = {
    binance : {
      chainId:'0x38',
      chainName:"BSCMAINET",
      rpcUrls: RPC_URLS_FRONT.binance,  
      nativeCurrency: {
        name: "BINANCE COIN",
        symbol: "BNB",
        decimals: 18,
      },
      blockExplorerUrls: ["https://bscscan.com/"],
    },
    binance_testnet : {
      chainId:'0x61',
      chainName:"BSC TESTNET",
      rpcUrls: RPC_URLS_FRONT.binance_testnet,  
      nativeCurrency: {
        name: "BINANCE COIN",
        symbol: "BNB",
        decimals: 18,
      },
      blockExplorerUrls: ["https://bscscan.com/"],
    },
    moonriver : {
      chainId:'0x505',
      chainName:"Moonriver",
      rpcUrls: RPC_URLS_FRONT.moonriver,  
      nativeCurrency: {
        name: "Moonriver",
        symbol: "MOVR",
        decimals: 18,
      },
      blockExplorerUrls: ["https://moonriver.moonscan.io/"],
    },
    moonbeam : {
      chainId:'0x504',
      chainName:"Moonbeam",
      rpcUrls: RPC_URLS_FRONT.moonbeam,  
      nativeCurrency: {
        name: "Moonbeam",
        symbol: "GLMR",
        decimals: 18,
      },
      blockExplorerUrls: ["https://moonscan.io/"],
    },
    moonbase_alpha : {
      chainId:'0x507',
      chainName:"Moonbase Alpha",
      rpcUrls: RPC_URLS_FRONT.moonbase_alpha,  
      nativeCurrency: {
        name: "Moonbase Alpha",
        symbol: "DEV",
        decimals: 18,
      },
      blockExplorerUrls: ["https://moonbase.moonscan.io/"],
    },
    mumbai : {
      chainId:'0x13881',
      chainName:"MUMBAI POLYGON",
      rpcUrls: RPC_URLS_FRONT.mumbai,
      nativeCurrency: {
        name: "MATIC",
        symbol: "MATIC",
        decimals: 18,
      },
      blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
    },
    polygon : {
      chainId:'0x89',
      chainName:"POLYGON",
      rpcUrls: RPC_URLS_FRONT.polygon,
      nativeCurrency: {
        name: "MATIC",
        symbol: "MATIC",
        decimals: 18,
      },
      blockExplorerUrls: ["https://polygonscan.com/"],
    },
    rinkeby : {
      chainId:'0x4',
      chainName:"Rinkeby",
      rpcUrls: RPC_URLS_FRONT.rinkeby,
      nativeCurrency: {
        name: "ETH",
        symbol: "ETH",
        decimals: 18,
      },
      blockExplorerUrls: ["https://rinkeby.etherscan.com/"],
    },
}
  