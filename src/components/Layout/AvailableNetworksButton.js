import { useState ,useEffect} from 'react';
import { Button,Dialog,DialogActions,DialogContent,DialogTitle,List,ListItem,} from '@mui/material'
import { useWeb3React } from '@web3-react/core'
import {  network } from '../../connectors'
import { networkData, networkNames, allowedNetworks, defaultChain } from "../../globalInfo"
import { convertChainId , getKeyByValue} from '../../utils/web3Utils'

export default function AvailableNetworks() {
    const metamask = useWeb3React('metamask')
    const context = useWeb3React()
    const [selectedNetwork, setSelectedNetwork] = useState(defaultChain)
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if(metamask.chainId){
          setSelectedNetwork(metamask.chainId)
        }
    }, [metamask.chainId])
    

    const handleChange = (e) => {
        if(metamask.active) {
          let value = parseInt(getKeyByValue(networkNames,e.target.innerText.toLowerCase())) 
        
          metamask.library.provider.request({
              method:"wallet_addEthereumChain",
              params:[networkData[e.target.innerText.toLowerCase()]]
          })
          .then()
          .catch()
          metamask.library.provider.request({
            method:"wallet_switchEthereumChain",
            params: [{chainId:convertChainId(value)}]
          })
          .then(x => {
            setSelectedNetwork(value)
          })
          .catch()

        }
        else{
            let value = e.target.value
            network.changeChainId(e.target.value)
            setSelectedNetwork(value)
            setOpen(false)
        }
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason !== 'backdropClick') {
            setOpen(false);
        }
    };

    const availableNetworks = allowedNetworks.map(chain => (
        // <Button key={chain} value={chain}>{networkNames[chain]}</Button>
        <ListItem key={chain}  onClick={handleChange} sx={{display:"flex", justifyContent:"center"}}>
            <Button value={chain} variant={chain === context.chainId ? 'filled' : 'text'}>{networkNames[chain]}</Button>
        </ListItem>
    ))

    return (
        <>
            <Button onClick={handleClickOpen} color='info' variant="outlined">{networkNames[selectedNetwork]}</Button>
            <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
                <DialogTitle sx={{textAlign:'center'}}>Select a network</DialogTitle>
                <DialogContent>
                    <List>
                        {availableNetworks}
                    </List>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>                    
                </DialogActions>
            </Dialog>
        </>
    );
}
