import React from "react";
import NavBare from "./NavBare";
import { useContext } from "react";
import { BookContext } from "./Slide";
import { useSpring, animated } from "react-spring";
import { useState } from "react";
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

  return (
    <div>
      <NavBare />
      <div className=" pt-2  ">
        <div className="flex justify-center items-center mt-2 px-2 text-center">
          <h1 className="text-2xl font-semibold text-red-700  text-start pl-5 px-2">
            {bookName}
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-center  sm:items-center">
          <div className="flex justify-center   py-5 ">
            <img src={bookImg} alt="" className="w-48 " />
          </div>
          {/* books info section  */}
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
              </div>
            </div>
          </animated.div>
        </div>
      </div>
      <div className="w- sm:w-auto  mb-10 mt-10 sm:mt-0">
        <h1 className="text-2xl text-center text-red-700 font-semibold">
          Trends Books
        </h1>
        <Slide />
      </div>
    </div>
  );
}
export default BooksInfo;
