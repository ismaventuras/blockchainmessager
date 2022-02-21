import {  Container, CssBaseline,  } from "@mui/material";
import { useState } from "react";

import ConnectionProvider from "../../context/ConnectionProvider";
import ColorTheme  from "../../context/ColorTheme";
import Footer from "../Layout/Footer";
import Header from '../Layout/Header'
import Hero from "./Hero";
import { InputAddress , InputMessage} from "./Inputs";
import { Notification } from "./Notifications";
import { SendButton } from "./SendButton";


const Messager = () => {
    const [address, setAddress] = useState('')
    const [message, setMessage] = useState('')
    const [txHash, setTxHash] = useState('')
    const [waiting, setWaiting] = useState(false)
    const [error, setError] = useState()
    const [isContract, setIsContract] = useState(false)

    const clear = () => {
        setAddress('')
        setMessage('')
        //setTxHash('')
        setWaiting(false)
        setError('')
        setIsContract(false)
    }

    return(
        <ConnectionProvider>
        <ColorTheme>
            <CssBaseline />
            <Header title={"blockchain messager"}/>
            <Container>
                <Hero/>        
            </Container>
            <Container sx={{display:"flex", flexDirection:"column", gap:2, justifyContent:"center",alignItems:"center"}}>
                <InputAddress address={address} setAddress={setAddress} isContract={isContract} setIsContract={setIsContract}/>
                <InputMessage message={message} setMessage={setMessage}/>
                <SendButton 
                    clear={clear} 
                    message={message} address={address} 
                    setTxHash={setTxHash} 
                    waiting={waiting} setWaiting={setWaiting} 
                    setError={setError} isContract={isContract}
                />
            </Container>
            <Notification waiting={waiting} error={error} txHash={txHash}/>
            <Footer/>
        </ColorTheme>
        </ConnectionProvider>
    )
}

export default Messager