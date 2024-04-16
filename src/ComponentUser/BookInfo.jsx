import React from "react";
import NavBare from "./NavBare";
import { useContext } from "react";
import { BookContext } from "./Slide";
import { useSpring, animated } from "react-spring";
import { useState } from "react";
import AiBook from "../assets/images/Ai_book.jpg";
// import { transform } from "framer-motion";
import Slide from "./Slide";
import { useEffect } from "react";
// import Home from "./Home";
//dont forget to fix the bug of reloading the page the content of the stat render and desepeare
//idea:try to save it localy.
//useParams to is a option if you have time to learn it
function BooksInfo() {
  //state has been passed by useContext
  const { BookInfo, setBookInfo, isVisible, setIsVisible } =
    useContext(BookContext);

  setIsVisible((preValue) => true);
  sessionStorage.setItem(BookInfo, "BookInfo");
  const [{ id, bookName, bookImg, count, id_subbook, Categorie, description }] =
    BookInfo;
  const springProps = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateX(0)" : "translateX(1000px)",
    config: { delay: 1000 },
  });

  useEffect(() => {
    const StoredValue = sessionStorage.getItem("BookInfo");
    console.log(StoredValue);
  }, []);

  {
    /* <div className="w- sm:w-auto  mb-10 mt-10 sm:mt-0">
      <div className=" justify-center items-center    flex">
        <div className="shadow-2xl rounded-md  flex flex-col sm:flex-row   sm:flex    px-6 py-4   bg-gray-800  transition-transform duration-300  hover:scale-95    scale-90">
          <div className="px-4   flex justify-center items-center">
            <img src={bookImg} alt="Aibook" width={200} className="  h-full py-9" />
          </div>
          <div className=" flex flex-col w-96">
            <div className="py-2">
              <h1 className="text-xl font-semibold text-red-500">
                {bookName}
              </h1>
            </div>
            <div>
              <p className="font-semibold py-2 text-white  underline">
                Description:{" "}
              </p>
              <p className="text-white font-bold">
            //  {description}
              </p>
            </div>
            <div className="flex sm:flex-row flex-col mt-5 gap-3 justify-center">
              <button className="py-2 border px-10 rounded-md bg-red-700 text-white font-semibold   border-none  hover:bg-red-600   transition-transform-duration-300">
                Order
              </button>
              <button  className="py-2 border px-10 rounded-md bg-red-700 text-white font-semibold   border-none  hover:bg-red-600   transition-transform-duration-300" >
                Reqest
              </button>
            </div>
          </div>
        </div>
      </div>
        <h1 className="text-2xl text-center text-red-700 font-semibold">
          Trends Books
        </h1>
        <Slide />
      </div>
    </div> */
  }
  return (
    <div className=" overflow-hidden  ">
      <section className="z-10   ">
        <NavBare />
      </section>

      <div
        className=" pt-2  scale-90  relative   hover:transition duration-300 rounded-md hover:shadow-md"
        style={{ zIndex: -1 }}
      >
        <div className="flex justify-center items-center mt-2 px-2 text-center">
          <h1 className="text-2xl font-semibold text-red-700  text-start pl-5 px-2">
            {bookName}
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-center  sm:items-center">
          <div className="flex justify-center   py-5 ">
            <img src={bookImg} alt="" className="w-48 " />
          </div>

          <animated.div style={springProps}>
            <div className="text-start  py-5  mt-1  rounded-xl sm:rounded-none  px-6 w-full sm:py-3 sm:px-10 sm:pr-64       shadow-slate-150 bg-opacity-95 ">
              <div className=" mb-7">
                <p className=" pb-2 font-bold text-xl text-red-700  text-start sm:text-center ">
                  Book Information
                </p>

                <p className=" font-bold py-1 ">Name of the book:</p>
                <span className="font-normal py-1">{bookName}</span>
                <p className="font-bold py-1">
                  Copies available: <span className="font-normal">{count}</span>
                </p>

                <p className=" font-bold py-1">
                  Author: <span className="font-normal py-1">Undefined</span>
                </p>

                <p className="font-bold py-1 ">
                  Edition: <span className="font-normal py-1">2020</span>
                </p>
                <div className="flex sm:flex-row flex-col gap-3 mt-2 ">
                  <button className="py-2 border px-10 rounded-md bg-red-700 text-white    border-none  hover:bg-red-600   transition-transform-duration-300">
                    Order
                  </button>
                  <button className="py-2 border px-10 rounded-md bg-red-700 text-white   border-none  hover:bg-red-600   transition-transform-duration-300">
                    Reqest
                  </button>
                </div>
              </div>
            </div>
          </animated.div>
        </div>
      </div>
      <h1 className="text-2xl text-center text-red-700 font-semibold">
        Trends Books
      </h1>
      <div className="relative z-[0]">
        <Slide />
      </div>
    </div>
  );
}
export default BooksInfo;
