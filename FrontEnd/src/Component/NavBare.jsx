import React from "react";
import { ReactDOM } from "react";
import UniLogo from "../assets/images/ferhatabas_logo.jpg"
import Menu from "../assets/images/Menu.svg"
import CartLogo from "../assets/images/icon-cart.svg"
import NotifiLogo from "../assets/images/notification.svg"
import Creators from "../assets/images/Creators.svg"
import Main from  "../assets/images/Main.svg"
import CategorieLogo from "../assets/images/Categorie.svg"
function NavBare()
{
    return(
        <>
        <nav>
     <div className="px-2 mt-2 flex relative border-b-2 py-1"> 

        <div className="flex">
        <img src={UniLogo} alt="UniLogo"  width={100} height={10}/>
        {/* <img src={Menu} alt="Menu-Logo" width={30} height={10} /> mb3d chof la nzidoha wla nn*/}
        </div>
        <div className="flex  pl-10 mt-4 gap-4 font-semibold">
            <p className="hover:animate-pulse font-roboto hover:text-red-700">Home</p>
            <p className="hover:animate-pulse font-roboto hover:text-red-700">Cart</p>
            <p className="hover:animate-pulse font-roboto hover:text-red-700">My books</p>
            <p className="hover:animate-pulse font-roboto hover:text-red-700"> Contact Us</p>
        </div>
        <div className="mt-4 absolute right-10  flex gap-6">
            <img src={NotifiLogo} alt="Notification-logo" />
         <img src={CartLogo} alt="Cart-logo" className="   b" />
         <button className=" border-none px-4 rounded-lg border-bg-red bg-[#B80000]  text-white cursor-pointer">login</button>
                  
        </div>
        
    </div>
  <div className="mt-2 border-t-0 border-b-2  rounded-xl pb-1 shadow-xl">
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
  </div>
    </nav>
        </>
    )
}
export default NavBare