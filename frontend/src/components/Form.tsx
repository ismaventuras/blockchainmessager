'use client'

import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { utils } from "ethers"


const addressInputStyle = `
    w-full p-2.5    
    bg-gray-50 dark:bg-gray-700
    border border-gray-300 rounded-lg dark:border-gray-600
    focus:ring-blue-200 focus:border-blue-200 dark:focus:ring-blue-500 dark:focus:border-blue-500
    text-gray-900 text-sm      
    dark:placeholder-gray-400 dark:text-white 
    
`

const textAreaStyle = `
    w-full p-2.5  
    text-sm text-gray-900 dark:text-white
    bg-gray-50 dark:bg-gray-700  
    rounded-lg border border-gray-300  dark:border-gray-600
    focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500    
    dark:placeholder-gray-400  
    resize-none
`

type FormProps = {
    state: FormState,
    setState: Dispatch<SetStateAction<FormState>>
}

export default function Form({ state, setState }: FormProps) {

    const [address, setAddress] = useState("");
    const [message, setMessage] = useState("")

    useEffect(() => {
        if (utils.isAddress(address)) {
            setState({
                address,
                message,
                valid: true
            })
        }
    }, [address, message])


    return (
        <form className="mt-2 container mx-auto max-w-md">
            <div>
                <label htmlFor="address" className="mb-2 text-sm font-medium ">Address to send the message</label>
                <input required type="text" name="address" placeholder="Adress receiving the message" className={addressInputStyle} onChange={(e) => setAddress(e.target.value)} />
            </div>
            <div>
                <label htmlFor="message" className="mb-2 text-sm font-medium ">Your message</label>
                <textarea
                    id="message"
                    rows={4}
                    className={textAreaStyle}
                    placeholder="Message to be sent"
                    
                    onChange={(e) => setMessage(e.target.value)}>
                </textarea>
            </div>

        </form>
    )
}