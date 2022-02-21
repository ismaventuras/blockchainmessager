import { Box, Button, Typography, AppBar, Toolbar, IconButton } from '@mui/material'
import { useWeb3React } from '@web3-react/core'
import { useContext} from 'react'
import { injected } from '../../connectors'

import DialogSelect from './AvailableNetworksButton'
import { useTheme } from '@emotion/react'
import { ColorModeContext } from '../../context/ColorTheme'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { shortenAddress } from '../../utils/web3Utils'

const MetamaskButton = () => {
  const metamask = useWeb3React('metamask')
    
  const onClickConnect = async () => {
      const connected = await metamask.activate(injected, error => {
        console.log(error)
        if (error.name === 'UnsupportedChainIdError'){
            metamask.deactivate()
        }
      }) 
  }

  return (
    <Button variant={'outlined'} color={metamask.active ? 'success' : 'inherit'} onClick={onClickConnect}>
      {/* <img src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg" alt='' loading='lazy' height="auto" width="50px" /> */}
      {metamask.active ? shortenAddress(metamask.account) : 'Connect'}
    </Button>
  )
}

const Header = ({title}) => {
  const theme = useTheme()
  const colorMode = useContext(ColorModeContext)
  return(
    <Box sx={{flexGrow:1}}>
      <AppBar position='static' color="default" elevation={0}>
        <Toolbar>
        <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>          
          <Typography  variant="h6" component="div" sx={{ flexGrow: 1 }}>{title}</Typography>
          <Box 
            sx={{
              display:'flex', 
              flexDirection:{xs:'column', md:'row'},
              justifyContent:{xs:"center"},
              gap:{xs:1, md:1},
              marginTop:{xs:1,md:0},
              marginBottom:{xs:1, md:0},
              }}
          >
            <MetamaskButton/>
            <DialogSelect/>
          </Box>          
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header