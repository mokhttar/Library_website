import React from "react";
import { ReactDOM } from "react";
import NavBare from "./NavBare";
import Search from "./SearchBare";
import TrendBooks from "./TrendsBooks";
function Home()
{
    return(
        <>
        <NavBare />
        <div className="flex items-center justify-center mt-2 ">
         <h1 className="text-2xl  ls leading-xl mt-3  ">Bienvenue à La Bibliothèque  <br /> <span className="text-red-700">   De La Faculté Des Sciences </span>  </h1>
         </div>
        <Search />
        <TrendBooks />

  </>
    )
}
export default Home