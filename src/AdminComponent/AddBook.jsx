import React from "react";
import { ReactDOM } from "react";
import AddStudentLogo from "../assets/images/AddStudent.json";
import Lottie from "lottie-react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import "react-phone-number-input/style.css";
import { useState } from "react";

function Addbook() {
  const handleForm = (e) => {
    e.preventDefault();
  };
  const [value, setValue] = useState();
  const [newDate, setnewDate] = useState(null);
  const [formValue, setformValue] = useState({
    bookname: "",
    id_book: "",
    Feild: "Computer Sience",
    autheur: "",
    versionNumber: "",
  });

  const [ErrMsg, setErrMsg] = useState({
    booknameErr: "",
    id_bookErr: "",
    autheurErr: "",
    versionNumberErr: "",
  });

  function handleChange(event) {
    event.preventDefault();
    setformValue((preForm) => {
      return {
        ...preForm,
        [event.target.name]: event.target.value,
      };
    });
  }

  function ValidationBook(event) {
    event.preventDefault();
    //validaion book name
    const onlyCharRegex = /^[a-zA-Z]*$/;
    if (!onlyCharRegex.test(formValue.bookname)) {
      setErrMsg((preValue) => {
        return {
          ...preValue,
          booknameErr: "book name must  only a  string of",
        };
      });
    } else {
      setErrMsg((preValue) => {
        return {
          ...preValue,
          booknameErr: "",
        };
      });
    }

    if (formValue.bookname.length == 0) {
      setErrMsg((preValue) => {
        return {
          ...preValue,
          booknameErr: "please enter a book name",
        };
      });
    } else {
      setErrMsg((preValue) => {
        return {
          ...preValue,
          booknameErr: "",
        };
      });
    }

    if (formValue.bookname.length < 5 || formValue.bookname.length > 25) {
      setErrMsg((preValue) => {
        return {
          ...preValue,
          booknameErr: "book name  not correct ",
        };
      });
    } else {
      setErrMsg((preValue) => {
        return {
          ...preValue,
          booknameErr: "",
        };
      });
    }

    // validation booksid
    const onlyNumbersRegex = /^[0-9]$/;
    if (!onlyNumbersRegex.test(formValue.id_book)) {
      setErrMsg((preValue) => {
        return {
          ...preValue,
          id_bookErr: "id of book must be a number",
        };
      });
    } else {
      setErrMsg((preValue) => {
        return {
          ...preValue,
          id_bookErr: "",
        };
      });
    }

    if (formValue.id_book.length != 8) {
      setErrMsg((preValue) => {
        return {
          ...preValue,
          id_bookErr: "id book must be a number  of  length of  8",
        };
      });
    } else {
      setErrMsg((preValue) => {
        return {
          ...preValue,
          id_bookErr: "",
        };
      });
    }

    //validation autheur 
     if (!onlyCharRegex.test(formValue.autheur)) {
      setErrMsg((preValue) => {
        return {
          ...preValue,
          autheurErr: "author name must  only a  string of",
        };
      });
    } else {
      setErrMsg((preValue) => {
        return {
          ...preValue,
          autheurErr: "",
        };
      });
    }

    if (formValue.autheur.length == 0) {
      setErrMsg((preValue) => {
        return {
          ...preValue,
          autheurErr: "please enter a author name",
        };
      });
    } else {
      setErrMsg((preValue) => {
        return {
          ...preValue,
          autheurErr: "",
        };
      });
    }

    if (formValue.autheur.length < 5 || formValue.autheur.length > 25) {
      setErrMsg((preValue) => {
        return {
          ...preValue,
          autheurErr: "author name  not correct ",
        };
      });
    } else {
      setErrMsg((preValue) => {
        return {
          ...preValue,
          autheurErr: "",
        };
      });
    }

    //validation version Number 
    if (!onlyNumbersRegex.test(formValue.versionNumber)) {
      setErrMsg((preValue) => {
        return {
          ...preValue,
          versionNumberErr: "id of book must be a number",
        };
      });
    } else {
      setErrMsg((preValue) => {
        return {
          ...preValue,
          versionNumberErr: "",
        };
      });
    }

    if (formValue.versionNumber.length != 8) {
      setErrMsg((preValue) => {
        return {
          ...preValue,
          versionNumberErr: "id book must be a number  of  length of  8",
        };
      });
    } else {
      setErrMsg((preValue) => {
        return {
          ...preValue,
          versionNumberErr: "",
        };
      });
    }




  }

  return (
    <>
      <div className="">
        <div className="flex justify-center items-center mt-10 ml-5 px-5">
          <h1 className="text-2xl text-black tracking-wide ml-10">Add Book</h1>
          <Lottie animationData={AddStudentLogo} className="w-16 ml-2" />
        </div>
        <div className="flex justify-center items-center ml-10 ">
          <form onSubmit={handleForm}>
            <div className="flex flex-col justify-center items-center mr-12 mt-5">
              <h2 className="text-black text-xl pb-3"> Book infromation</h2>
              <div className="flex  gap-2">
                <div className="flex flex-col">
                  <input
                    type="text"
                    className="input-field border  focus:outline-none py-2 px-4 rounded-md border-green-500 placeholder-gray-400"
                    placeholder="Book Name"
                    name="bookname"
                    onChange={handleChange}
                  />

                  <p className="text-semibold text-red-700  text-sm ml-1">
                    {ErrMsg.booknameErr}
                  </p>
                </div>
                <div className="flex  flex-col">
                  <input
                    type="text"
                    className="input-field border border-green-500 py-2 px-4 rounded-md focus:outline-none focus:border-green-500 placeholder-gray-400"
                    placeholder="Book's id"
                    name="id_book"
                    onChange={handleChange}
                  />
                  <p className="text-semibold text-red-700  text-sm ml-1">{ErrMsg.id_bookErr}</p>
                </div>
              </div>
              <h2 className=" text-xl py-3"> Autheur</h2>
              <div className="flex flex-col  w-full  ">
                <input
                  type="text"
                  placeholder="Autheur of the book"
                  name="autheur"
                  className="input-field border   border-green-500 py-2 px-4 rounded-md focus:outline-none focus:border-green-500 placeholder-gray-400"
                  onChange={handleChange}
                />
                <p className="text-semibold text-red-700  text-sm ml-1">{ErrMsg.autheurErr}</p>
              </div>
              <h2 className="text-xl py-3">Feild of Study</h2>
              <div className="border-green-500  flex flex-col w-full">
                <select
                  name="Feild"
                  className="border py-2     border-md  border-green-500   focus:outline-none rounded-md"
                >
                  <option value="Computer Sience" className="border-green-500 ">
                    {" "}
                    Computer Sience
                  </option>
                  <option value="Mathematics"> Mathematics</option>
                  <option value="Physics"> Physics</option>
                  <option value="Chemistry"> Chemistry</option>
                </select>
              </div>
              <div>
                <h2 className="text-xl py-3 text-center">
                  Date and version Number
                </h2>
                <div className="flex gap-2 ">
                  <div className="flex flex-col">
                    <input
                      type="text"
                      name="versionNumber"
                      className="input-field border border-green-500 py-2 px-4 rounded-md focus:outline-none focus:border-green-500 placeholder-gray-400"
                      placeholder="Version Number"
                      onChange={handleChange}
                    />
                    <p className="text-semibold text-red-700  text-sm ml-1">{ErrMsg.versionNumberErr}</p>
                  </div>
                  <DatePicker
                    selected={newDate}
                    onChange={(date) => setnewDate(date)}
                    placeholderText="DD/MM/YYYY"
                    dateFormat="dd/MM/yyyy"
                    name="Date"
                    className="input-field border border-green-500 py-2 px-4 rounded-md focus:outline-none focus:border-green-500 placeholder-gray-400"
                  />
                </div>
                <div className="flex justify-center mt-10  ">
                  <button
                    className=" py-2 px-7  rounded-md bg-green-500 text-white"
                    onClick={ValidationBook}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Addbook;
