import { useState, useEffect } from "react"
import { Snackbar ,Alert, Link} from "@mui/material"
import { blockExplorerUrls } from "../../globalInfo"
import { useWeb3React } from "@web3-react/core"


export const Notification = ({waiting, error, txHash}) => {
    const metamask = useWeb3React('metamask')
    const [open,setOpen] = useState(false)

    useEffect(()=>{
        if(waiting){
            setOpen(true)
        }
    },[waiting])

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false)
    }

    return(
        <Snackbar open={open} autoHideDuration={60000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={error ? 'error' : (txHash ? 'success' : 'info')}>
                {error 
                ? error 
                : txHash 
                    ? <>Check on block explorer : <Link href={`${blockExplorerUrls[metamask.chainId]}/tx/${txHash}`} target="_blank">{txHash}</Link> </> 
                    : 'Waiting for transaction . . .'}
            </Alert>
        </Snackbar>
    )
}
export const WaitingNotification = ({waiting}) => {
    const [open,setOpen] = useState(false)

    useEffect(()=>{
        if(waiting){
            setOpen(true)
        }
    },[waiting])
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false)
    }

    return(
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="info">
                Waiting for transaction . . .
            </Alert>
        </Snackbar>
    )
}
export const ErrorNotification = ({error}) => {
    const [open,setOpen] = useState(false)

    useEffect(()=>{
        if(error){
            setOpen(true)
        }
    },[error])

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false)
    }

    return(
        <Snackbar open={open} autoHideDuration={10000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error">
                {error}
            </Alert>
        </Snackbar>
    )
}
