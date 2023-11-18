import React from "react";
import { darklogo } from "../assets/index";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Link } from "react-router-dom";
const Registration = () => {
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
                  type="text"
                  className="w-full  py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Email or Phone Numer</p>
                <input
                  type="text"
                  className="w-full  py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Password</p>
                <input
                  type="password"
                  className="w-full  py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Re-enter Password</p>
                <input
                  type="password"
                  className="w-full  py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                />
                <p className="text-sm text-gray-500">
                  Password must be atleast 6 characters.
                </p>
              </div>
              <button
                onClick={(e) => e.preventDefault()}
                className="w-full py-1.5 text-sm font-normal rounded-sm bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b] hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput"
              >
                Coninue
              </button>
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
