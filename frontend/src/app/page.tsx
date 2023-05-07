'use client'
import Form from '@/components/Form'
import Hero from '@/components/Hero'
import SendTransactionButton from '@/components/SendTransactionButton';
import { useState } from 'react';


export default function Home() {
  const [formState, setFormState] = useState<FormState>({
    address:"",
    message:"",
    //error:"",
    valid:false
  });


  return (
    <div className='container mx-auto p-2 sm:p-0 '>
      <Hero />
      <Form state={formState} setState={setFormState} />
      <SendTransactionButton address={formState.address} message={formState.message} />
    </div>
  )
}
