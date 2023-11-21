import React, { useEffect, useRef, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {motion} from "framer-motion"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SideNavContent from './SideNavContent';
import {useSelector} from "react-redux";
const HeaderBottom = () => {
  const userInfo = useSelector((state)=>state.amazon.userInfo);
  const ref= useRef();
    const [Sidebar, setSideNav] = useState(false);
    useEffect(()=>{
    document.body.addEventListener("click",(e)=>{
    if (e.target.contains(ref.current)) {
      setSideNav(false)
    }
    })
    },[ref,Sidebar])
  return (
    <div className="w-full px-4 h-[36px] bg-amazon_light text-whiteText flex items-center">
      {/* List Items start here  */}
        <ul className="flex items-center gap-2 text-sm tracking-wide">
            <li onClick={()=>setSideNav(true)} className="handerHover flex items-center gap-1"><MenuIcon/>All</li>
            <li className="handerHover hidden md:inline-flex">Today's Deals</li>
            <li className="handerHover hidden md:inline-flex">Customer Serive</li>
            <li className="handerHover hidden md:inline-flex">Gift Cards</li>
            <li className="handerHover hidden md:inline-flex">Registry</li>
            <li className="handerHover hidden md:inline-flex">Sell</li>
        </ul>
      {/* List Items end here  */}
      {/* side Nav start here  */}
      {
        Sidebar && (
            <div className="w-full h-screen text-black fixed top-0 left-0 bg-amazon_blue bg-opacity-50">
              <div className="w-full h-full relative">
                <motion.div ref={ref} inital={{x:-500,opacity:0}} animate={{x:0, opacity:1}} transition={{duration:.5}} className="w-[80%] md:w-[350px] h-full bg-white border border-black">
                    <div className="w-full bg-amazon_light text-white py-2 px-6 flex items-center gap-4">
                     {userInfo ? (
                      <img className="w-10 h-10 rounded-full" src={userInfo.image} alt="User Img"/>
                     ):(<AccountCircleIcon/>)}
                     {
                      userInfo ? (<h3 className="font-titleFont font-bold text-lg tracking-wide">
                     {userInfo.userName}
                     </h3>
                     ):(
                      <h3 className="font-titleFont font-bold text-lg tracking-wide">
                      Hello, Sign In
                     </h3>
                     )}
                    </div>
                    <SideNavContent title="Digital Content & Devices" one="Amazon Music" two="Kindle E-readers & Books" three="Amazon Appstore"/>
                    <SideNavContent title="Shop by Department" one="Electronic" two="Computers" three="Smart Home"/>
                    <SideNavContent title="Program & Features" one="Gift Cards" two="Amazon live" three="International Shopping"/>
                </motion.div>
                <span onClick={()=>setSideNav(false)} className="cursor-pointer absolute top-0 left-[82%] md:left-[360px] w-10 h-10 text-black flex items-center justify-center border bg-gray-200 hover:bg-red-500 hover:text-white duration-300"><CloseIcon/></span>
              </div>
            </div>
        )
      }
      {/* side Nav end here  */}
    </div>
  )
}

export default HeaderBottom
