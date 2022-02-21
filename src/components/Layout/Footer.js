import { Container, Link, Typography } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
//import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box } from "@mui/system";

const Footer = () => {
    return(
        <Container sx={{marginTop:16, display:"flex",justifyContent:"center" , flexDirection:"column", alignItems:"center", gap:1}}>
            <Typography align='center' variant="subtitle2">
                 Alone we can do so little; together we can do so much
            </Typography>
            <Box sx={{display:"flex", gap:1}}>
                <Link href="https://github.com/ismaventuras" target="_blank" color="inherit">
                    <GitHubIcon color='inherit' fontSize="large"/>
                </Link>
                <Link href="https://twitter.com/HispaSquirtle" target="_blank" color="inherit">
                    <TwitterIcon color='inherit' fontSize="large"/>
                </Link>
                {/* <Link>
                    <TelegramIcon color='inherit' fontSize="large"/>
                </Link> */}
            </Box>
        </Container>
    )
}

export default Footer