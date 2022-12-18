import { Container, Link, SvgIcon, Typography } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
//import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box } from "@mui/system";
import {ReactComponent as StateOfDappsLogo} from './stateOfDapps_logo.svg'

const ListedOn = () => {
    return(
        <Link href="https://www.stateofthedapps.com/dapps/blockchainmessager" target="_blank" color="inherit" sx={{"& svg": {fontSize:50}}}>
            <SvgIcon>
                <StateOfDappsLogo />
            </SvgIcon>
        </Link>
    )
}


const Footer = () => {
    return(
        <Container sx={{marginTop:16, display:"flex",justifyContent:"center" , flexDirection:"column", alignItems:"center", gap:1}}>
            <Typography align='center' variant="subtitle2">
                 Alone we can do so little; together we can do so much
            </Typography>
            <Box sx={{display:"flex", gap:1, alignItems:'center'}}>
                <Link href="https://github.com/ismaventuras" target="_blank" color="inherit">
                    <GitHubIcon color='inherit' fontSize="large"/>
                </Link>
                <Link href="https://twitter.com/ismaelbdev" target="_blank" color="inherit">
                    <TwitterIcon color='inherit' fontSize="large"/>
                </Link>
                {/* <Link>
                    <TelegramIcon color='inherit' fontSize="large"/>
                </Link> */}
                <ListedOn/>
            </Box>
            
        </Container>
    )
}

export default Footer