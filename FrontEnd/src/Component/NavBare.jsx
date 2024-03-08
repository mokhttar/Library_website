import React from "react";
import { ReactDOM } from "react";
import UniLogo from "../assets/images/ferhatabas_logo.jpg"
import CartLogo from "../assets/images/icon-cart.svg"
import NotifiLogo from "../assets/images/notification.svg"
import Creators from "../assets/images/Creators.svg"
import Main from  "../assets/images/Main.svg"
import CategorieLogo from "../assets/images/Categorie.svg"
import { useState } from "react";
import Close from "../assets/images/icon-close.svg"
import Menu from "../assets/images/icon-menu.svg"
//RESPONSIVE
function NavBare()
{

        const[menu,setmenu]=useState(false)
        function handleClick()
        {setmenu(preValue=>!preValue)}
    return(
        <>
        <nav>        
     <div className="px-2 mt-2 flex relative border-b-2 py-1"> 

        <div className="flex  gap-4">
        <img src={UniLogo} alt="UniLogo"  width={100} height={10} className="pb-1 hidden sm:block"/>
        <img src={Menu} alt=""  className="size-8 mt-3 ml-6 sm:hidden "  onClick={handleClick} />
        <img src={UniLogo} alt=""  width={80} height={5} className="sm:hidden mt-1 ml-2  " />
        {/* <img src={Menu} alt="Menu-Logo" width={30} height={10} /> mb3d chof la nzidoha wla nn*/}
        </div>
        <div className="sm:flex  sm:pl-10 sm:mt-4 sm:gap-4 font-semibold hidden">
            <p className="hover:animate-pulse font-roboto hover:text-red-700">Home</p>
            <p className="hover:animate-pulse font-roboto hover:text-red-700">Cart</p>
            <p className="hover:animate-pulse font-roboto hover:text-red-700">My books</p>
            <p className="hover:animate-pulse font-roboto hover:text-red-700"> Contact Us</p>
        </div>
        {/* {for mobile application} */}
        <div className= {menu ?"absolute bg-white h-screen  left-0 w-1/2 top-0 pt-10 pl-3 ": "hidden" }  >
                <ul className="pt-3">

                    <button><img src={Close}  onClick={handleClick}/></button>
                    <li className="hover:font-extrabold hover:text-red-700 hover:animate-pulse font-bold p-2 text-gray-500">Home</li>
                    <li className="hover:font-extrabold hover:text-red-600 hover:animate-pulse font-bold p-2 text-gray-500">Cart</li>
                    <li className="hover:font-extrabold hover:text-red-700 hover:animate-pulse font-bold p-2 text-gray-500">My books</li>
                    <li className="hover:font-extrabold hover:text-red-700 hover:animate-pulse font-bold p-2 text-gray-500"> Contact Us</li>
                </ul>
            </div>

        <div className="sm:mt-4 sm:absolute sm:right-0  sm:flex sm:gap-6 flex  absolute right-0 mt-2 gap-3">
            <img src={NotifiLogo} alt="Notification-logo" />
         <img src={CartLogo} alt="Cart-logo" className="   b" />
         <button className=" border-none px-4  mr-3 rounded-lg border-bg-red bg-[#B80000]  text-white cursor-pointer">login</button>
                  
        </div>
        
    </div>

        {/* waiting to desccus about it  with the client*/}
  {/* <div className="mt-2 border-t-0 border-b-2  rounded-xl pb-1 shadow-xl">
       <div className="flex   justify-around  ">
        <div>
                <img src={Creators} alt="y-b-logo" width={23} height={10} className="ml-4"/>
                <p className="font-medium hover:animate-pulse font-roboto hover:text-red-700">creators</p>
        </div>
        <div className="ml-1  mt-1 ">
                <img src={Main}alt="Main-logo" width={33}  height={10} className="" />
                <p className="text-center font-medium hover:animate-pulse font-roboto hover:text-red-700">Main</p>
        </div>
        <div>
            <img src={CategorieLogo} alt="cat-logo" className="ml-3" />
            <p className="text-center font-medium hover:animate-pulse font-roboto hover:text-red-700">Categorie</p>

            </div>
       </div>
  </div> */}
    </nav>
        </>
    )
}
export default NavBare