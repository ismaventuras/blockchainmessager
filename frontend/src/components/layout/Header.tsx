'use client'

import ConnectButton from "../wagmi/ConnectButton"
import dynamic from 'next/dynamic'
const DarkModeButton = dynamic(() => import("./DarkModeButton"), {
    ssr: false,
})

const Header = () => {
    return(
        <div className="flex justify-end container mx-auto py-2 items-center gap-2">
            <div>
                <ConnectButton 
                    accountStatus={'avatar'}
                    chainStatus={'icon'}
                    showBalance={false}                    
                />
            </div>
            <div>
                <DarkModeButton/>
            </div>
        </div>
    )
}

export default Header