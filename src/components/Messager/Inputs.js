import { Box, TextField } from "@mui/material"
import { useWeb3React } from "@web3-react/core"
import { ethers } from "ethers"
import { useEffect } from "react"

export const InputAddress = ({address, setAddress,isContract, setIsContract}) => {
    const context = useWeb3React()

    useEffect(()=>{
        const getIsContract = async () => {
            if(ethers.utils.isAddress(address)){
                const code = await context.library.getCode(
                    address,
                    "latest"
                )

                if(code === "0x"){
                    setIsContract(false)
                }else{
                    setIsContract(true)
                }
                
            }
            else{
                setIsContract(false)
            }
        }
        getIsContract()
    },[address, context.library])

    return (
        <Box sx={{ display: 'flex',  justifyContent:"center" , width:"100%",maxWidth:"500px"}}>
            <TextField 
            id="input-with-sx" label="Destionation address" 
            variant="filled" 
            fullWidth
            inputProps={{
                style:{
                    textAlign:"center",
                },
            }}
            value={address}
            onChange={(e)=>setAddress(e.target.value)}
            error={isContract || ( !ethers.utils.isAddress(address) && address.length > 10)}
            helperText={isContract ? "Address is a contract"  : !ethers.utils.isAddress(address) && address.length > 10  ? "Not a valid address.": ''}
            color={ethers.utils.isAddress(address) && !isContract ? "success" : ''}
            focused
            />
            
        </Box>
    )
}

export const InputMessage = ({message, setMessage}) => {

    return (
        <Box sx={{ display: 'flex',  width:"100%",maxWidth:"500px" }}>
            <TextField
                id="standard-multiline-static" label="Your message"
                variant="filled"
                fullWidth
                multiline
                rows={4}
                value={message}
                color={message ? 'success' : ''}
                onChange={e => setMessage(e.target.value)}
                focused
            />
        </Box>
    )
}