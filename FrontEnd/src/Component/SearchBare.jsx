import React from "react";
import { ReactDOM } from "react";
function Search()
{
    return(
     <>
        <div>
            <form>
               <div className="flex items-center justify-center  mt-5 ">
                <button className="rounded-sm h-10 mt-1 px-5 bg-red-700    text-white shadow-md ">Search </button>  
                <input type="search" name="search"  className="sm:px-40 sm:py-2 sm:rounded-sm mt-1 text-center  bg-gray-700 border-1 shadow-md focus:border-none focus:outline-none  focus:animate-pulse px-10 py-[8px] "  placeholder="Rechercher un livre "/>
                </div>
            </form>
         </div>
     </>

    )
}
export default Search