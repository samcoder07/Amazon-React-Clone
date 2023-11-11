import React from 'react'
import {darklogo} from '../assets/index'
const Signin = () => {
  return (
    <div className='w-full'>
      <div className='w-full bg-gray-100'>
        <form className='w-[350px] mx-auto'>
            <img className='w-32' src={darklogo} alt=''/>
        </form>
      </div>
    </div>
  )
}

export default Signin