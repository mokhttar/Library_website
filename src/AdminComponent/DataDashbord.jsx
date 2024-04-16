import React from "react";
import { DumyData } from "./DumyDatatTest/DatatTest";

function DataDashbord() {
  return (
    <>
      <div className="pt-10 px-2 border flex flex-col mt-10 mx-20 pb-10 rounded-xl shadow-md bg-white">
        <h1 className="py-1 text-xl px-1 text-red-700 ml-6 text-center">
          <span className="animate-text-appear inline-block text-center font-semibold text-2 py-2xl">Recent Transactions</span>
        </h1>
        <div className="flex justify-between">
        <form class=" ">
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="default-search"
                class="block w-full py-3  px-20 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:"
                placeholder="Search"
                required
              />
            </div>
          </form>
          <div className="flex gap-4 px-3 mt-2">
            <p>All</p>
            <p className="text-green-600">Returned</p>
            <p className="text-red-600">Borrowed</p>
          </div>
        </div>
        <div className="mt-4 overflow-y-scroll" style={{ maxHeight: "390px" }}>
          <table className="w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-5">id_Student</th>
                <th className="py-2 px-5">Name</th>
                <th className="py-2 px-5">BookName</th>
                <th className="py-2 px-5">Status</th>
                <th className="py-2 px-5">Date</th>
              </tr>
            </thead>
            <tbody className="overflow-y-scroll">
              {DumyData.map((element, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                  <td className="py-2 px-5">{element.id_Student}</td>
                  <td className="py-2 px-5">{element.Name}</td>
                  <td className="py-2 px-5">{element.BookName}</td>
                  <td className={element.Status === "Borrowed" ? "py-2 px-5 text-red-600" : "py-2 px-5 text-green-600"}>
                    {element.Status}
                  </td>
                  <td className="py-2 px-5">{element.Date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default DataDashbord;
