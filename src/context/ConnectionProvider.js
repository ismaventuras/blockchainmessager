import { useWeb3React } from "@web3-react/core"
import { useEffect } from "react"
import { network } from "../connectors"
import { useEagerConnect } from "../hooks/useEagerConnect"
import { useInactiveListener } from "../hooks/useInactiveListener"


const ConnectionProvider = ({children}) => {

  const context = useWeb3React()
  const metamask = useWeb3React('metamask')
  const { active, activate } = context


  useEffect(() => {
    activate(network, (error) => {
      console.log(error)
    }).then()
  }, [active, activate])

  useEffect(()=>{
    if(metamask.active && context.chaindId !== metamask.chainId){
      network.changeChainId(metamask.chainId)
    }
  },[metamask])

  const triedEager = useEagerConnect()
  useInactiveListener(!triedEager)

    return(
        <>
            {children}
        </>
    )
}
export default ConnectionProvider