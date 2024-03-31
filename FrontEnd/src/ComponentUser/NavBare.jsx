//Import section of the code
import React from "react";
import UniLogo from "../assets/images/ferhatabas_logo.jpg";
import LogoWeb from "../assets/images/LogoWebSite.png";
import CartLogo from "../assets/images/icon-cart.svg";
import NotifiLogo from "../assets/images/notification.svg";
import { useState } from "react";
import Close from "../assets/images/icon-close.svg";
import Menu from "../assets/images/Menu.svg";
import { Link } from "react-router-dom";
// Those three import from  the second  part of the  navigation bare
import CategorieLogo from "../assets/images/Categorie.svg";
import Creators from "../assets/images/Creators.svg";
import Main from "../assets/images/Main.svg";
import { createContext } from "react";

export const MenuContext = createContext();

function NavBare() {
  //a State to work the Menu bare  in small devices
  const [menu, setmenu] = useState(false);
  function handleClick() {
    setmenu((preValue) => !preValue);
    console.log(menu);
  }

  return (
    <>
      <MenuContext.Provider value={{ menu, setmenu }}>
        <nav className="sticky top-0  " > 
          <div className="px-2 mt-2 flex relative  py-2  shadow-gray-300  ">
            <div className="flex  gap-4">
              <img
                src={LogoWeb}
                alt="UniLogo"
                width={80}
                height={10}
                className="pb-1 hidden sm:block mt-1"
              />
              <img
                src={Menu}
                alt=""
                className="size-8 mt-3 ml-6 sm:hidden "
                onClick={handleClick}
              />
              <img
                src={UniLogo}
                alt=""
                width={80}
                height={5}
                className="sm:hidden mt-1 ml-2  "
              />
              {/* <img src={Menu} alt="Menu-Logo" width={30} height={10} /> mb3d chof la nzidoha wla nn*/}
            </div>
            <div className="sm:flex  sm:pl-10 sm:mt-4 sm:gap-4 font-semibold hidden  justify-center ">
              <Link to="/">
                <p className="hover:animate-pulse font-roboto hover:text-red-700  hover:text-xl hover:rounded-md">
                  Home
                </p>
              </Link>
              <p className="hover:animate-pulse font-roboto hover:text-red-700 hover:text-lg">
                Cart
              </p>
              <p className="hover:animate-pulse font-roboto hover:text-red-700 hover:text-lg">
                My books
              </p>
              <p className="hover:animate-pulse font-roboto hover:text-red-700 hover:text-lg  ">
                {" "}
                Contact Us
              </p>
            </div>
            {/* {for mobile application} */}
            <div
              className={` absolute bg-white h-screen left-0 w-3/4 top-0 pt-10 pl-3 z-50 ${
                menu ? "animate-slideIn" : "hidden"
              }`}
            >
              <ul className="pt-3">
                <button>
                  <img
                    src={Close}
                    onClick={handleClick}
                    className="animate-slideIn"
                  />
                </button>
                <li className="hover:font-extrabold hover:text-red-700 hover:animate-pulse font-bold p-2 text-gray-500 ">
                  Home
                </li>
                <li className="hover:font-extrabold hover:text-red-600 hover:animate-pulse font-bold p-2 text-gray-500">
                  Cart
                </li>
                <li className="hover:font-extrabold hover:text-red-700 hover:animate-pulse font-bold p-2 text-gray-500">
                  My books
                </li>
                <li className="hover:font-extrabold hover:text-red-700 hover:animate-pulse font-bold p-2 text-gray-500">
                  Contact Us
                </li>
              </ul>
            </div>

            <div className=" sm:absolute sm:right-0  sm:flex sm:gap-6 flex  absolute right-0 mt-2 gap-3">
              {/* <img src={NotifiLogo} alt="Cart-logo" className="h-6 mt-1" /> */}
              <Link to="/Login">
                <button className=" border-none px-4  mr-3 h-8 rounded-lg border-bg-red bg-[#B80000] font-bold text-white cursor-pointer tracking-wide hover:bg-red-600 hover:text-white hover:font-bold">
                  Login
                </button>
              </Link>
            </div>
          </div>
        </nav>
      </MenuContext.Provider>
    </>
  );
}
export default NavBare;
