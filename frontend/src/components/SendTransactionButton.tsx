'use client'
import { usePrepareSendTransaction, useSendTransaction } from 'wagmi'
import {utils} from "ethers";

const buttonStyle = `
    disabled:cursor-not-allowed
    border rounded-lg 
    text-sm text-center
    px-5 py-2.5 
`

export default function SendTransactionButton({address,message}:{address:string,message:string}) {
    const { config } = usePrepareSendTransaction({
        request: {
          to: address,
          value: 0,
          data: utils.hexlify(utils.toUtf8Bytes(message))
        },        
    })
    const { sendTransaction, isSuccess, isError, isLoading, data, error:txError } = useSendTransaction(config)

    return (
        <div className='container mx-auto max-w-md'>
            <button className={buttonStyle} disabled={isLoading || !address || !message} onClick={() => sendTransaction?.()}>
                Sign and send
            </button>
            {isSuccess && 
                <div className='my-2 flex flex-col gap-2'>
                    <p className='text-sm font-medium'>Your message has been sent, check your transaction on block explorer</p>                    
                    <p className='font-mono border rounded-lg p-2 break-all'>
                        {data?.hash}
                    </p>
                    
                </div>
            }
            {isError && <p className='text-red-500'>{txError?.message}</p>}
        </div>
    )
}