import React from "react";
import { DumyData } from "./DumyDatatTest/DatatTest";

function DataDashbord() {
  return (
    <>
      <div className="pt-10 px-2 border flex flex-col mt-10 mx-20 pb-10 rounded-xl shadow-md bg-white">
        <h1 className="py-1 text-xl px-1 text-red-700 ml-6 text-center">
          <span className="animate-text-appear inline-block text-center">Recent Transactions</span>
        </h1>
        <div className="flex justify-between">
          <input
            type="text"
            size={20}
            className="shadow-md  py-1 rounded-md border-gray-100 border mt-1 px-10 text-start"
            placeholder="Search for a transaction"
          />
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
