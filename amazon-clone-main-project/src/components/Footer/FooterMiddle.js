import React from 'react'
import FooterMiddleList from './FooterMiddleList'
import { middleList } from '../../constants'
import {logo,bdFlag} from '../../assets/index'
const FooterMiddle = () => {
  return (
    <div className='w-full bg-amazon_light text-white'>
      {/* Top Start here  */}
      <div className='w-full border-b-[1px] border-gray-500 p-10'>
        <div className='max-w-5xl mx-auto text-gray-300'>
         <div className='w-full grid lgl:grid-cols-4 grid-cols-1 gap-6 md:grid-cols-2 md:place-items-center md:items-start'>
       {
       middleList.map((item)=>(
        <FooterMiddleList key={item._id} title={item.title} listItem={item.listItem}/>
       ))
       }
         </div>
        </div>
      </div>
      {/* Top End here  */}
      {/* Bottom Start here  */}
      <div className="w-full flex gap-6 items-center justify-center py-6">
        <div>
          <img src={logo} alt="logo" className='w-20 pt-3'/>
        </div>
        <div className='flex gap-2'>
          <p className='flex gap-1 items-center justify-center border border-gray-500 hover:border-amazon_yellow cursor-pointer duration-200 px-2 py-1'>English</p>
        </div>
        <div className='flex gap-1 items-center justify-center border border-gray-500 hover:border-amazon_yellow cursor-pointer duration-200 px-2 py-1'>
          <img src={bdFlag} alt="bdflag" className='w-6'/>
          <p>India</p>
        </div>
      </div>
      {/* Bottom End here  */}
    </div>
  )
}

export default FooterMiddle
