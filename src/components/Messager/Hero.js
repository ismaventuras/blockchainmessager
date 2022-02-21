import { Container, Typography } from "@mui/material"

const Hero = ()=>{
    return(
        <Container disableGutters maxWidth="sm" component="div" sx={{pt:8 ,pb:6}}>
         <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
         >
            Messager
        </Typography>
            <Typography variant="h5" color="text.secondary" component="p" align="center">
                Do you want to send a message that wants to be recorded on the blockchain? 
                Choose a friend, type a message and let that message live until the end of the blockchain!
            </Typography>
        </Container>
    )
}
export default Hero