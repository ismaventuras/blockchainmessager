import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Web3ReactProvider ,createWeb3ReactRoot} from "@web3-react/core";
import {ethers} from "ethers";


const Web3ReactProviderMetamask = createWeb3ReactRoot('metamask')

function getLibrary(provider){
  //const library = new ethers.providers.InfuraProvider(4,provider)
  const library = new ethers.providers.Web3Provider(provider)
  return library
}
function getLibraryMetamask(provider){
  const library = new ethers.providers.Web3Provider(provider)
  return library
}



ReactDOM.render(
  <React.StrictMode>
  <Web3ReactProvider getLibrary={getLibrary}>
    <Web3ReactProviderMetamask getLibrary={getLibraryMetamask}>
      <App />
    </Web3ReactProviderMetamask>
  </Web3ReactProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

