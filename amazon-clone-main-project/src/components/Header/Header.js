import React, { useState } from 'react'
import { logo } from '../../assets/index'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { allItems } from '../../constants';
import HeaderBottom from './HeaderBottom';
import { Link } from 'react-router-dom';
const Header = () => {

  const [ShowAll, setShowAll] = useState(false);

  return (
    <div className="w-full sticky top-0 z-50">
      <div className="w-full bg-amazon_blue  py-3  text-white px-4 flex items-center gap-4">
        {/* image section start here  */}
        <div className="handerHover">
          <img src={logo} alt="logo" className="w-24 mt-2" />
        </div>
        {/* image section end here  */}
        {/* Deliver section start here  */}
        <div className="handerHover hidden mdl:inline-flex">
          <LocationOnIcon />
          <p className="text-sm text-lightText font-light flex flex-col">
          Deliver to <span className="text-sm font-semibold -mt-1 text-whiteText">India</span>
          </p>
        </div>
        {/* Deliver section end here  */}
        {/* Search section start here  */}
        <div className="h-10 rounded-md hidden lgl:flex flex-grow relative">
          <span onClick={() =>setShowAll(!ShowAll)} className="w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 duration-300 text-sm cursor-pointer rounded-tl-md rounded-bl-md text-amazon_blue font-titleFont flex items-center justify-center">All<span></span><ArrowDropDownIcon/></span>
          {ShowAll && (
            <div>
              <ul className='absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p-2 flex-col gap-1 z-50'>
                {/* <li className='text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200'>All Departments</li> */}
              {
                allItems.map((item)=>{
                  return(
                    <li key={item.id} className='text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200'>{item.title}</li>
                  )
                })
              }
              </ul>
            </div>
          )}
          <input type='text' className='h-full text-base text-amazon_blue flex-grow outline-none border-none px-2'/>
          <span className="w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md"><SearchIcon/></span>
        </div>
        {/* Search section end here  */}
        {/* Signin section start here  */}
        <Link to="/signin">
         <div className="flex flex-col items-start justify-center handerHover">
          <p className="text-sm mdl:text-xs text-white mdl:text-lightText font-light">Hello, sign in</p>
          <p className="text-sm font-semibold text-lightText -mt-1 hidden mdl:inline-flex">Accounts & Lists <span><ArrowDropDownIcon/></span></p>
         </div>
         </Link>
        {/* Signin section end here  */}
        {/* Order section start here  */}
          <div className="hidden lgl:flex flex-col items-start justify-center handerHover">
            <p className="text-xs text-lightText font-light">Returns</p>
            <p className="text-sm font-semibold text-lightText -mt-1"> & Orders <span><ArrowDropDownIcon/></span></p>
          </div>
        {/* Order section end here  */}
        {/* Cart section start here  */}
          <div className="flex items-start justify-center handerHover relative"><ShoppingCartIcon/>
          <p>Cart <span className='absolute text-xs -top-1 left-6 font-semibold p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full flex justify-center items-center'>0</span></p>
          </div>
        {/* Cart section end here  */}
      </div>
      <HeaderBottom/>
    </div>
  )
}

export default Header
