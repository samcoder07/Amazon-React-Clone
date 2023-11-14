import React, { useState } from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { darklogo } from "../assets/index";
import { Link } from "react-router-dom";
const Registration = () => {
  const [clientName,setClientName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [cPassword, setCPassword]=useState("");


  // Error Message alert start
  const [errClientName,setErrClientName]=useState("");
  const [errEmail,setErrEmail]=useState("");
  const [errPassword,setErrPassword]=useState("");
  const [errcPassword, setErrCPassword]=useState("");
  // Error Message alert end


  // handle function start 
  const handleName=(e)=>{
    setClientName(e.target.value)
    setErrClientName("");
  }
  const handleEmail=(e)=>{
    setEmail(e.target.value)
    setErrEmail("");
  }
  const handlePassword=(e)=>{
    setPassword(e.target.value)
    setErrPassword("");
  }
  const handleCPassword=(e)=>{
    setCPassword(e.target.value)
    setErrCPassword("");
  }

  // email validation start
  const emailValidation = (email)=>{
     return String(email).toLowerCase().match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  }


// submit button start
  const handleRegistration=(e)=>{
    e.preventDefault();
    if (!clientName) {
      setErrClientName("Enter your Name")
    }
    if (!email) {
      setErrEmail("Enter your email")
    }else{
      if (!emailValidation(email)) {
        setErrEmail("Enter a Valid Email")
      }
    }
    if (!password) {
      setErrPassword("Enter your password")
    }else{
      if (password.length>6) {
        setErrCPassword("Passwords must be at least 6 characters")
      }else{
        if(!cPassword !== password){
          setErrCPassword("Password not Matched")
        }
      }
    }
    if (!cPassword) {
      setErrCPassword("Confirm your Password")
    } else{
      if(cPassword !== password){
        setErrCPassword("Password not Matched")
      }
    }
    
    if (clientName && email && emailValidation(email) && password && password.length>=6 && cPassword && cPassword === password) {
      console.log(clientName,email,password,cPassword);
      setClientName("")
      setEmail("")
      setPassword("")
      setCPassword("")
    }
  }
  // handle function end 
  return (
    <div className="w-full">
      <div className="w-full bg-gray-100 pb-10">
        <form className="w-[370px] mx-auto flex flex-col items-center">
          <img className="w-32" src={darklogo} alt="amazon-black-logo" />
          <div className="w-full border border-zinc-200 p-6">
            <h2 className="font-titleFont text-3xl font-medium mb-4">
              Create Account
            </h2>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Your Name</p>
                <input
                onChange={handleName}
                value={clientName}
                  type="text"
                  className="w-full py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                />
                {
                  errClientName && (
                    <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="font-titleFont font-extrabold text-base">!</span>{errClientName}</p>
                  )
                }
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Email or Phone Number</p>
                <input
                onChange={handleEmail}
                value={email}
                  className="w-full py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                />
                  {
                  errEmail && (
                    <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="font-titleFont font-extrabold text-base">!</span>{errEmail}</p>
                  )
                }
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Password</p>
                <input
                onChange={handlePassword}
                value={password}
                  type="password"
                  className="w-full py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                />
                  {
                  errPassword && (
                    <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="font-titleFont font-extrabold text-base">!</span>{errPassword}</p>
                  )
                }
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Re-enter Password</p>
                <input
                onChange={handleCPassword}
                value={cPassword}
                  type="password"
                  className="w-full py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                />
                  {
                  errcPassword && (
                    <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="font-titleFont font-extrabold text-base">!</span>{errcPassword}</p>
                  )
                }
                <p className="text-xs text-gray-500">Password must be at least 6 characters.</p>
              </div>
              <button onClick={handleRegistration} className='w-full py-1.5 text-sm font-normal rounded-sm bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b] hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput'>Continue</button>
            </div>
            <p className="text-xs text-black leading-4 mt-4">By Continuing, you agree to Amazon's <span className="text-blue-600">Conditions of Use{" "}</span> and <span className="text-blue-600">Privacy Policy.</span></p>
            <div>
              <p className="text-xs text-black">Already have an account? 
             <Link to="/signin">
             <span className="text-blue-600 group-hover:text-orange-700 group-hover:underline underline-offset-1 cursor-pointer duration-100">Sign in <span><ArrowRightIcon/></span></span>
             </Link>
              </p>
              <p className="text-xs text-black -mt-2">Buying for work? <span className="text-blue-600 group-hover:text-orange-700 group-hover:underline underline-offset-1 cursor-pointer duration-100">Create a free bussiness account</span></p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
