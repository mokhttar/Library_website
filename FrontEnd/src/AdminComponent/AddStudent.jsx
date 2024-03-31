import React from "react";
import { ReactDOM } from "react";
import AddStudentLogo from "../assets/images/AddStudent.json";
import Lottie from "lottie-react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import Addsvg from "../assets/images/Add.svg";
import PhoneInput from "react-phone-number-input/input";
import "react-phone-number-input/style.css";
import { useState } from "react";
import { firstName } from "faker/lib/name";

function AddStudent() {
  const handleForm = (e) => {
    e.preventDefault();
  };
  const [value, setValue] = useState();
  const [newDate, setnewDate] = useState(null);
  const [formValue, setformValue] = useState({
    firstname: "",
    lastname: "",
    Feild: "Computer Sience",
    Studentid: "",
  });
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [ErrMsg, setErrMsg] = useState({
    firstnameErr: "",
    lastnameErr: "",
    StudentidErr: "",
    PhoneNumberErr: "",
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
  function handlePhoneNumber(phoneNumber) {
    setPhoneNumber(phoneNumber);
  }

  function ValidationSubmit(event) {
    event.preventDefault();
    let isValid = true; 
    const onlyCharRegex = /^[a-zA-Z]*$/;
    const onlyNumbersRegex = /^[0-9]*$/;

    // Validation for first name
    if (!onlyCharRegex.test(formValue.firstname)) {
      setErrMsg((preMsg) => ({
        ...preMsg,
        firstnameErr: "First name must only contain letters",
      }));
      isValid = false;
    } else if (formValue.firstname.length === 0) {
      setErrMsg((preMsg) => ({
        ...preMsg,
        firstnameErr: "Please enter first name",
      }));
      isValid = false;
    } else if (formValue.firstname.length > 20) {
      setErrMsg((preMsg) => ({
        ...preMsg,
        firstnameErr: "Name must not exceed 20 characters",
      }));
      isValid = false;
    } else {
      setErrMsg((preMsg) => ({
        ...preMsg,
        firstnameErr: "",
      }));
    }

    // Validation for phone number
    if (PhoneNumber.length !== 13) {
      setErrMsg((preMsg) => ({
        ...preMsg,
        PhoneNumberErr: "Wrong phone number",
      }));
      isValid = false;
    } else {
      setErrMsg((preMsg) => ({
        ...preMsg,
        PhoneNumberErr: "",
      }));
    }

    // Validation for student id
    if (!onlyNumbersRegex.test(formValue.Studentid)) {
      setErrMsg((preMsg) => ({
        ...preMsg,
        StudentidErr: "Student id must only be numbers",
      }));
      isValid = false;
    } else if (formValue.Studentid.length === 0) {
      setErrMsg((preMsg) => ({
        ...preMsg,
        StudentidErr: "Please enter student id",
      }));
      isValid = false;
    } else if (formValue.Studentid.length !== 8) {
      setErrMsg((preMsg) => ({
        ...preMsg,
        StudentidErr: "Student id must be 8 numbers",
      }));
      isValid = false;
      setErrMsg((preMsg) => ({
        ...preMsg,
        StudentidErr: "",
      }));
    }

    if (isValid) {
      //hna akteb post reqest ta3ak bh yab3ath llbackend
    }
  }

  return (
    <>
      <div className="">
        <div className="flex justify-center items-center mt-10 ml-5 px-5">
          <h1 className="text-2xl text-black tracking-wide ml-10">
            Add Student
          </h1>
          <Lottie animationData={AddStudentLogo} className="w-16 ml-2" />
        </div>
        <div className="flex justify-center items-center ml-10 ">
          <form onSubmit={handleForm}>
            <div className="flex flex-col justify-center items-center mr-12 mt-5">
              <h2 className="text-black text-xl pb-3">Full Name</h2>
              <div className="flex  gap-2">
                <div className="flex flex-col">
                  <input
                    type="text"
                    className="input-field border  focus:outline-none py-2 px-4 rounded-md border-green-500 placeholder-gray-400"
                    placeholder="First Name"
                    name="firstname"
                    onChange={handleChange}
                  />
                  <p className="text-semibold text-red-700  text-sm ml-1">
                    {ErrMsg.firstnameErr}
                  </p>
                </div>
                <div className="flex  flex-col">
                  <input
                    type="text"
                    className="input-field border border-green-500 py-2 px-4 rounded-md focus:outline-none focus:border-green-500 placeholder-gray-400"
                    placeholder="Last Name"
                    name="lastname"
                    onChange={handleChange}
                  />
                  <p className="text-semibold text-red-700  text-sm ml-1">
                    {ErrMsg.lastnameErr}
                  </p>
                </div>
              </div>
              <h2 className=" text-xl py-3">Phone Number </h2>
              <div className="flex flex-col  w-full  ">
                <PhoneInput
                  placeholder="Enter phone number"
                  onChange={handlePhoneNumber}
                  value={PhoneNumber}
                  name="phoneNumber"
                  country="DZ"
                  className="input-field border   border-green-500 py-2 px-4 rounded-md focus:outline-none focus:border-green-500 placeholder-gray-400"
                />
                <p className="text-semibold text-red-700  text-sm ml-1">
                  {ErrMsg.PhoneNumberErr}
                </p>
              </div>
              <h2 className="text-xl py-3">Feild of Study</h2>
              <div className="border-green-500  flex flex-col w-full">
                <select
                  name="Feild"
                  value={formValue.Feild}
                  onChange={handleChange}
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
                  Birthday date and student_id
                </h2>
                <div className="flex gap-2 ">
                  <div className="flex flex-col">
                    <input
                      type="text"
                      name="Studentid"
                      className="input-field border border-green-500 py-2 px-4 rounded-md focus:outline-none focus:border-green-500 placeholder-gray-400"
                      placeholder="student id"
                      onChange={handleChange}
                    />
                    <p className="text-semibold text-red-700  text-sm ml-1">
                      {ErrMsg.StudentidErr}
                    </p>
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
                    onClick={ValidationSubmit}
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
export default AddStudent;
