import React from 'react'
import {payment} from "../assets/index"
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Link } from 'react-router-dom'
const Checkout = () => {
  return (
    <div className='mx-6'>
    <Link to="/">
      <KeyboardBackspaceIcon/>
    </Link>
    <div className='mx-auto items-center container flex flex-col'>
      <div className='text-3xl text-amazon_blue mt-5'> 
      <h1 className='text-titleFont'>Payment Gateway</h1>
      </div>
    </div>
      <div className='mb-7 mt-8 mx-8'>
         <h5>Steps to Scan Qr Code</h5>
    <div className='grid grid-cols-2 mt-2'>
    <ul className='list-disc mb-4'>
        <li className='text-sm'>Open Paytm App</li>
        <li className='text-sm'>Tap Scan option available at the bottom</li>
        <li className='text-sm'>Point Paytm Scan at QR Code to login</li>
      </ul>
    </div>
    <div className='mx-auto flex flex-col items-center mt-0'>
    <Link to="https://paytm.com/paytmwallet">
      <img src={payment} className='w-[300px]'/>
    </Link>
    </div>
    </div>
      </div>
  )
}

export default Checkout
