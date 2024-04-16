import React from "react";
import { useState } from "react";
import NavBareAdmin from "./NavBareAdmin";
import DeleteLogo from "../assets/images/DeleteLogo.svg";
import EditLogo from "../assets/images/Editlogo.svg";
import SeeLogo from "../assets/images/Seelogo.svg";
import Close from "../assets/images/icon-close.svg";
import Addbook from "./AddBook";
function ManageBooks() {
  const [addbook, setAddbook] = useState(false);
  const [searchedValue, setSearch] = useState("");

  function handleChanege(event) {
    event.preventDefault();
    setSearch(event.target.value);

  }
  function handleAddbook(e) {
    e.preventDefault();
    setAddbook((preValue) => !preValue);

  }


  return (
    <>
      <div className="flex bg-gray-900 overflow-hidden">
        <NavBareAdmin />
        {addbook && (
          <section className="fixed inset-0 flex justify-center  items-center bg-opacity-30    backdrop-blur-sm z-10  ">
            <div className="w-full max-w-lg px-5 ">
              <div className="rounded-md backdrop-blur-sm bg-white p-12">
                <img src={Close} alt="" onClick={handleAddbook} />
                <Addbook />
              </div>
            </div>
          </section>
        )}
        <div className="w-full">
          <div className="mt-5 text-white  animate-text-appear">
            <h1 className="text-3xl text-center  ">
              Welcom Back <span className="text-red-500"> Mokhttar </span>
            </h1>
            <p className="text-center ">Manage your books</p>
          </div>
          <div className="flex gap-2 items-center  justify-between  px-5 mt-5 text-white py-4  ">
            <h1 className="text-2xl text-white font-semibold  px-2">
              List of books
            </h1>
            <div className="flex gap-5 py-2"></div>
            <div className="flex gap-4 py-2  items-center   ">
              {/* <input
                type="text"
                className="border  rounded-md placeholder:px- placeholder:text-start  py-1  px-10 focus:outline-none text-black"
                placeholder="Search by name"
                onChange={handleChanege}
              /> */}

              <form className="ml-60 w-full">
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                       strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full py-3  px-20 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:"
                    placeholder="Search "
                    required
                  />
                </div>
              </form>
            </div>
            <button
              className="py-3 border px-10 bg-green-700 border-none hover:bg-green-500 rounded-md"
              onClick={handleAddbook}
            >
              Add book
            </button>
          </div>

          <div
            className="flex justify-center ml-5 overflow-auto bg-white    rounded-l-xl mr-2"
            style={{ maxHeight: "440px" }}
          >
            <table className="w-full   flex-shrink flex-wrap overflow-y-scroll">
              <thead>
                <tr className="w-screen bg-gray-200">
                  <th className="w-32 py-3 ">ID</th>
                  <th className="w-32 py-3 ">Book name</th>
                  <th className="w-32 py-3 ">Auteur</th>
                  <th className="w-32 py-3 ">Copies</th>
                  <th className="w-32 py-3 ">id_subbook</th>
                  <th className="py-3 w-32">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="w-32 py-3">1</th>
                  <th className="w-32 py-3">Book One</th>
                  <th className="w-32 py-3">Author One</th>
                  <th className="w-32 py-3">5</th>
                  <th className="w-32 py-3">12345</th>
                  <th className="w-32 py-3 flex justify-center items-center ml-5 ">
                    <button>
                      <img src={SeeLogo} alt="" className="w-8" />
                    </button>
                    <button>
                      {" "}
                      <img src={DeleteLogo} alt="" className="w-8" />
                    </button>
                    <button>
                      {" "}
                      <img src={EditLogo} alt="" className="w-8" />
                    </button>
                  </th>
                </tr>
                <tr>
                  <th className="w-32 py-3">2</th>
                  <th className="w-32 py-3">Book Two</th>
                  <th className="w-32 py-3">Author Two</th>
                  <th className="w-32 py-3">3</th>
                  <th className="w-32 py-3">67890</th>
                  <th className="w-32 py-3 flex justify-center items-center ml-5 ">
                    <button>
                      <img src={SeeLogo} alt="" className="w-8" />
                    </button>
                    <button>
                      {" "}
                      <img src={DeleteLogo} alt="" className="w-8" />
                    </button>
                    <button>
                      {" "}
                      <img src={EditLogo} alt="" className="w-8" />
                    </button>
                  </th>
                </tr>
                <tr>
                  <th className="w-32 py-3">1</th>
                  <th className="w-32 py-3">Book One</th>
                  <th className="w-32 py-3">Author One</th>
                  <th className="w-32 py-3">5</th>
                  <th className="w-32 py-3">12345</th>
                  <th className="w-32 py-3 flex justify-center items-center ml-5 ">
                    <button>
                      <img src={SeeLogo} alt="" className="w-8" />
                    </button>
                    <button>
                      {" "}
                      <img src={DeleteLogo} alt="" className="w-8" />
                    </button>
                    <button>
                      {" "}
                      <img src={EditLogo} alt="" className="w-8" />
                    </button>
                  </th>
                </tr>
                <tr>
                  <th className="w-32 py-3">2</th>
                  <th className="w-32 py-3">Book Two</th>
                  <th className="w-32 py-3">Author Two</th>
                  <th className="w-32 py-3">3</th>
                  <th className="w-32 py-3">67890</th>
                  <th className="w-32 py-3 flex justify-center items-center ml-5 ">
                    <button>
                      <img src={SeeLogo} alt="" className="w-8" />
                    </button>
                    <button>
                      {" "}
                      <img src={DeleteLogo} alt="" className="w-8" />
                    </button>
                    <button>
                      {" "}
                      <img src={EditLogo} alt="" className="w-8" />
                    </button>
                  </th>
                </tr>
                <tr>
                  <th className="w-32 py-3">1</th>
                  <th className="w-32 py-3">Book One</th>
                  <th className="w-32 py-3">Author One</th>
                  <th className="w-32 py-3">5</th>
                  <th className="w-32 py-3">12345</th>
                  <th className="w-32 py-3 flex justify-center items-center ml-5 ">
                    <button>
                      <img src={SeeLogo} alt="" className="w-8" />
                    </button>
                    <button>
                      {" "}
                      <img src={DeleteLogo} alt="" className="w-8" />
                    </button>
                    <button>
                      {" "}
                      <img src={EditLogo} alt="" className="w-8" />
                    </button>
                  </th>
                </tr>
                <tr>
                  <th className="w-32 py-3">2</th>
                  <th className="w-32 py-3">Book Two</th>
                  <th className="w-32 py-3">Author Two</th>
                  <th className="w-32 py-3">3</th>
                  <th className="w-32 py-3">67890</th>
                  <th className="w-32 py-3 flex justify-center items-center ml-5 ">
                    <button>
                      <img src={SeeLogo} alt="" className="w-8" />
                    </button>
                    <button>
                      {" "}
                      <img src={DeleteLogo} alt="" className="w-8" />
                    </button>
                    <button>
                      {" "}
                      <img src={EditLogo} alt="" className="w-8" />
                    </button>
                  </th>
                </tr>
                <tr>
                  <th className="w-32 py-3">2</th>
                  <th className="w-32 py-3">Book Two</th>
                  <th className="w-32 py-3">Author Two</th>
                  <th className="w-32 py-3">3</th>
                  <th className="w-32 py-3">67890</th>
                  <th className="w-32 py-3 flex justify-center items-center ml-5 ">
                    <button>
                      <img src={SeeLogo} alt="" className="w-8" />
                    </button>
                    <button>
                      {" "}
                      <img src={DeleteLogo} alt="" className="w-8" />
                    </button>
                    <button>
                      {" "}
                      <img src={EditLogo} alt="" className="w-8" />
                    </button>
                  </th>
                </tr>
                <tr>
                  <th className="w-32 py-3">2</th>
                  <th className="w-32 py-3">Book Two</th>
                  <th className="w-32 py-3">Author Two</th>
                  <th className="w-32 py-3">3</th>
                  <th className="w-32 py-3">67890</th>
                  <th className="w-32 py-3 flex justify-center items-center ml-5 ">
                    <button>
                      <img src={SeeLogo} alt="" className="w-8" />
                    </button>
                    <button>
                      {" "}
                      <img src={DeleteLogo} alt="" className="w-8" />
                    </button>
                    <button>
                      {" "}
                      <img src={EditLogo} alt="" className="w-8" />
                    </button>
                  </th>
                </tr>
                <tr>
                  <th className="w-32 py-3">2</th>
                  <th className="w-32 py-3">Book Two</th>
                  <th className="w-32 py-3">Author Two</th>
                  <th className="w-32 py-3">3</th>
                  <th className="w-32 py-3">67890</th>
                  <th className="w-32 py-3 flex justify-center items-center ml-5 ">
                    <button>
                      <img src={SeeLogo} alt="" className="w-8" />
                    </button>
                    <button>
                      {" "}
                      <img src={DeleteLogo} alt="" className="w-8" />
                    </button>
                    <button>
                      {" "}
                      <img src={EditLogo} alt="" className="w-8" />
                    </button>
                  </th>
                </tr>
                <tr>
                  <th className="w-32 py-3">2</th>
                  <th className="w-32 py-3">Book Two</th>
                  <th className="w-32 py-3">Author Two</th>
                  <th className="w-32 py-3">3</th>
                  <th className="w-32 py-3">67890</th>
                  <th className="w-32 py-3 flex justify-center items-center ml-5 ">
                    <button>
                      <img src={SeeLogo} alt="" className="w-8" />
                    </button>
                    <button>
                      {" "}
                      <img src={DeleteLogo} alt="" className="w-8" />
                    </button>
                    <button>
                      {" "}
                      <img src={EditLogo} alt="" className="w-8" />
                    </button>
                  </th>
                </tr>
                <tr>
                  <th className="w-32 py-3">2</th>
                  <th className="w-32 py-3">Book Two</th>
                  <th className="w-32 py-3">Author Two</th>
                  <th className="w-32 py-3">3</th>
                  <th className="w-32 py-3">67890</th>
                  <th className="w-32 py-3 flex justify-center items-center ml-5 ">
                    <button>
                      <img src={SeeLogo} alt="" className="w-8" />
                    </button>
                    <button>
                      {" "}
                      <img src={DeleteLogo} alt="" className="w-8" />
                    </button>
                    <button>
                      {" "}
                      <img src={EditLogo} alt="" className="w-8" />
                    </button>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
export default ManageBooks;
