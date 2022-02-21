import { ethers } from "ethers";
import {useWeb3React} from '@web3-react/core'
import {Button, CircularProgress} from '@mui/material'


export const SendButton = ({clear, address, message, setTxHash, waiting, setWaiting, setError, isContract}) => {
    const metamask = useWeb3React('metamask')

    const onClick = async (e) => {
        setError('')
        setTxHash('')
        let transaction = {
            from: metamask.account,
            to : address, 
            nonce: await metamask.library.getTransactionCount(metamask.account,"latest"),
            data:ethers.utils.hexlify(ethers.utils.toUtf8Bytes(message))
        }
        
        try{
            setWaiting(true)
            const tx = await metamask.library.getSigner().sendTransaction(transaction)
            
            const receipt = await tx.wait()
            setTxHash(receipt.transactionHash)
            console.log(receipt)
            setWaiting(false)
            if(receipt){
                clear()
            }
        }
        catch(error){
            setWaiting(false)
            setError(error.message)
        }
    }

    // if we are waiting for tx or user action, show circular progress
    // if not waiting, show send message Button
    // if address is not valid or there's no message or metamask is not active button will be disabled
    return(
        <>
            {waiting 
            ? <CircularProgress/>
            :            
            <Button 
                disabled={!metamask.active || !ethers.utils.isAddress(address) || !message || isContract}
                variant="outlined"
                size="large"
                color='inherit'
                onClick={onClick}
            >
                {!metamask.active ? 'Connect metamask to send a message': 'Send!'}
            </Button>
            }            
        </>
    )
}