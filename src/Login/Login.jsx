import React from "react";
import { useState } from "react";
import loginimg from "../assets/images/luisa-brimble-VfHoMBagDPc-unsplash.jpg";
import { motion } from "framer-motion";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";

function Login() {
  // state to take the user name data
  const [userName, setUserName] = useState("");
  // state to take the password  value
  const [password, setPassword] = useState("");
  //state take the err messages
  const [err,setErr] = useState("");

  //  function track the change of the feild of the user name
  const handleUserName = (e) => {
    setUserName(e.target.value);
  };
  //function track the cahnge of the feild of the password
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

//function Validation user Name(validation of the front end  dont foget to add  one in the backend use passport js )
  const  handleValidation =() =>{
  }

  const handleSubmit = (e)=>{
      e.preventDefault();
  }

  
  return (
    <>
   
        <div className="">
          <div className="flex justify-center items-center h-screen ">
            <div className="w-3/4 h-screen hidden lg:block ">
              <img
                src={loginimg}
                alt="Placeholder Image"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2  ">
              <h1 className="text-2xl font-semibold mb-4 text-center  text-black">
                You're Back! Let's Get Started!{" "}
              </h1>
              <form onSubmit={handleSubmit} method="POST">
                <div className="mb-4">
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-red-500"
                    autoComplete="off"
                    placeholder="Enter your username"
                    onChange={handleUserName}
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-red-500"
                    autoComplete="off"
                    placeholder="Password"
                    onChange={handlePassword}
                  />
                </div>

                <div className="mb-4 flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    name="remember"
                    className="text-red-500"
                  />
                  <label htmlFor="remember" className="text-gray-600 ml-2">
                    Remember Me
                  </label>
                </div>

                <button
                  type="submit"
                  className="bg-red-700 hover:bg-red-600 text-white font-semibold rounded-md py-2 px-4 w-full "
                >
                  Login
                </button>
                <div className="flex mt-1 px-2 ">
                  <hr className="bg-red-700 mt-3 w-1/2 pr-1" />
                  <span className="px-2">or</span>
                  <hr className="bg-red-700 mt-3 w-1/2 pr-1" />
                </div>
              </form>
              <div className="liens flex justify-center mt-5">
                <FaFacebook className="mx-1 text-[#B80000] text-[30px] hover:text-[25px] transform  hover:text-black  hover:-translate-y-2   ease-in-out duration-300" />
                <FaTwitter className="mx-1 text-[#B80000] text-[30px] hover:text-[25px]  hover:text-black  hover:-translate-y-2   ease-in-out duration-300" />
                <MdEmail className="text-[#B80000] text-[30px] mx-1 hover:text-[25px]  hover:text-black  hover:-translate-y-2   ease-in-out duration-300" />
                <FaInstagram className="text-[#B80000] text-[30px] mx-1 hover:text-[px]  hover:text-black  hover:-translate-y-2   ease-in-out duration-300" />
              </div>
            </div>
          </div>
        </div>
  
    </>
  );
}
export default Login;
