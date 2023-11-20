import React, { useState } from "react";
import { darklogo } from "../assets/index";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import {RotatingLines} from "react-loader-spinner";
import {motion} from "framer-motion"
const Registration = () => {
  const navigate = useNavigate()
  const auth = getAuth();
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  // error messages section start
  const [errClientName, setErrClientName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [errCPassword, setErrCPassword] = useState("");
  const [firebaseErr,setFirebaseErr]=useState("")
  // error messages section end

  // loading state start
  const [Loading, setLoading] = useState(false)
  const[successMsg,setSuccessMsg] = useState(""); 
  // loading state end 

  // handle function section start
  const handleName = (e) => {
    setClientName(e.target.value);
    setErrClientName("");
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };
  const handleCPassword = (e) => {
    setCPassword(e.target.value);
    setErrCPassword("");
  };

  // email validation start
  const emailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };
  // email validation end

  const handleRegistration = (e) => {
    e.preventDefault();
    if (!clientName) {
      setErrClientName("Enter Your Name");
    }
    if (!email) {
      setErrEmail("Enter Your Email");
      setFirebaseErr("")
    } else {
      if (!emailValidation(email)) {
        setErrEmail("Enter a valid email");
      }
    }
    if (!password) {
      setErrPassword("Enter Your Password");
    } else {
      if (password.length > 6) {
        setErrPassword("Passwords must be at least 6 characters");
      }
    }
    if (!cPassword) {
      setErrCPassword("Confirm your password");
    } else {
      if (cPassword !== password) {
        setErrCPassword("Password does not match");
      }
    }

    if (
      clientName &&
      email &&
      emailValidation(email) &&
      password &&
      password.length >= 6 &&
      cPassword &&
      cPassword === password
    ) {
      setLoading(true)
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        updateProfile(auth.currentUser,{
          displayName:clientName,
          photoURL:"https://www.noormohmmad.live/static/media/roundedProfile.477a194221d255c8ce26.png",
        })
        // Signed up 
        const user = userCredential.user;
        setLoading(false)
        setSuccessMsg("Account Created Successfully!");
        setTimeout(()=>{
          navigate("/signin")
        },3000)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode.includes("auth/email-already-in-use")) {
          setFirebaseErr("Email already in use, Try Another one")
        }
        // ..
      });
      setClientName("");
      setEmail("");
      setPassword("");
      setCPassword("");
      setErrCPassword("");
      setFirebaseErr("");
    }
  };
  // handle function section end
  return (
    <div className="w-full">
      <div className="w-full bg-gray-100 pb-10">
        <form className="w-[370px] mx-auto flex flex-col items-center">
          <img src={darklogo} alt="Amazon-dark-image" className="w-32" />
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
                  className="w-full  py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                />
                {errClientName && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="italic font-titleFont text-extrabold text-base">
                      !
                    </span>
                    {errClientName}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Email or Phone Numer</p>
                <input
                  onChange={handleEmail}
                  value={email}
                  type="text"
                  className="w-full  py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                />
                {firebaseErr && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="italic font-titleFont text-extrabold text-base">
                      !
                    </span>
                    {firebaseErr}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Password</p>
                <input
                  onChange={handlePassword}
                  value={password}
                  type="password"
                  className="w-full  py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                />
                {errPassword && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="italic font-titleFont text-extrabold text-base">
                      !
                    </span>
                    {errPassword}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Re-enter Password</p>
                <input
                  onChange={handleCPassword}
                  value={cPassword}
                  type="password"
                  className="w-full  py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                />
                {errCPassword && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="italic font-titleFont text-extrabold text-base">
                      !
                    </span>
                    {errCPassword}
                  </p>
                )}
                <p className="text-sm text-gray-500">
                  Password must be atleast 6 characters.
                </p>
              </div>
              <button
                onClick={handleRegistration}
                className="w-full py-1.5 text-sm font-normal rounded-sm bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b] hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput"
              >
                Coninue
              </button>
              {
                Loading && (
                  <div className="flex justify-center">
                    <RotatingLines
                      strokeColor="#febd69"
                      strokeWidth="5"
                      animationDuration="0.75"
                      width="50"
                      visible={true}
                    />
                  </div>
                )
              }
              {
                successMsg && (
                  <div>
                    <motion.p initial={{y:10,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:.5}} className="text-base font-titleFont text-green-500 border-[1px] border-green-500 px-2 text-center">{successMsg}</motion.p>
                  </div>
                )
              }
              <p className="text-xs text-black leading-4 mt-4">
                By continuing, you agree to Amazon's{" "}
                <span className="text-blue-600 cursor-pointer">
                  Condition of Use {""}
                </span>
                and{" "}
                <span className="text-blue-600 cursor-pointer">
                  Privacy Policy
                </span>
              </p>
              <div>
                <p className="text-xs text-black">
                  Already have an account?{" "}
                  <Link to="/signin">
                  <span className="text-blue-600  hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer">
                      Signin{" "}
                      <span>
                        <ArrowRightIcon />
                      </span>
                    </span>
                  </Link>
                </p>
                <p className="text-xs text-black -mt-2">
                  Buy for work?{" "}
                  <span className="text-blue-600  hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer">
                    Create a free business account
                  </span>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="w-full bg-gradient-to-t from-white via-white to-zinc-200 flex flex-col gap-4 justify-center items-center py-10  ">
        <div className="flex items-center gap-6">
          <p className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer">
            Condition of Use
          </p>
          <p className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer">
            Privacy Policy
          </p>
          <p className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer">
            Privacy Policy
          </p>
        </div>
        <p className="text-xs text-gray-600">
          &copy; 2023 All Rights Reserved to Amazon.
        </p>
      </div>
    </div>
  );
};

export default Registration;
