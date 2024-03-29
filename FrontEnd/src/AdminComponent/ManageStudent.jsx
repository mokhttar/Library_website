import React from "react";
import NavBareAdmin from "./NavBareAdmin";
import Actions from "../assets/images/Settings.svg";
import { DumyData } from "./DumyDatatTest/DatatTest";

function ManageStudent() {
  return (
    <div className="flex bg-gray-900 h-screen">
      <NavBareAdmin />

      <div className="flex flex-col w-full p-8">
        <div className="mb-8">
          <h1 className="text-center text-3xl text-red-500 mb-2 font-semibold">
            <span className="animate-text-appear inline-block"><span className="text-white">Welcome back,</span> Mokhttar</span>
          </h1>
          <p className="text-center text-white opacity-75 text-sm">Manage your students efficiently</p>
        </div>

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl text-white font-semibold">Manage Students</h2>
          <button className="bg-green-700 px-4 py-2 rounded-md text-white hover:bg-green-600 transition-colors duration-300">
            Add New Student
          </button>
        </div>

        <div className="overflow-auto rounded-lg shadow-lg bg-white">
          <table className="w-full table-auto">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-6 py-3 text-left">ID</th>
                <th className="px-6 py-3 text-left">Full Name</th>
                <th className="px-6 py-3 text-left">Bac Year</th>
                <th className="px-6 py-3 text-left">Filiere</th>
                <th className="px-6 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {DumyData.map((element, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                  <td className="px-6 py-4">{element.id_Student}</td>
                  <td className="px-6 py-4">{element.Name}</td>
                  <td className="px-6 py-4">{element.BookName}</td>
                  <td className={element.Status === "Borrowed" ? "px-6 py-4 text-red-600" : "px-6 py-4 text-green-600"}>
                    {element.Status}
                  </td>
                  <td className="px-6 py-4 flex items-center">
                    <img src={Actions} alt="ActionsIcon" className="w-6 h-6 mr-2" />
                    <button className=" hover:text-blue-800">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ManageStudent;
