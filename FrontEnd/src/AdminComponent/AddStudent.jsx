import React from "react";
import { ReactDOM } from "react";
import AddStudentLogo from "../assets/images/AddStudent.json";
import Lottie from "lottie-react";
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import Addsvg from "../assets/images/Add.svg"
function AddStudent() {
  const handleForm = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div>
        <div className="flex gap-2 mt-10 justify-center  ">
          <h1 className="mt-10 text-2xl  text-green-500 ">Add Studdent</h1>
          <Lottie animationData={AddStudentLogo} className="w-30 "></Lottie>
        </div>
        <form onSubmit={handleForm}>
        
          <p className="text-lg py-2 text-center">Full Name</p>
          <div className="flex justify-center gap-5">
            
          <div className="flex flex-col">
            <input type="text"  className="border w-50 py-1 px-5 rounded-md placeholder:px-4 border-green-500 " placeholder="First name" name="FirstName" />
          </div>
          <div className="flex flex-col">
            <input type="text"   className="border w-50 py-1 px-5 rounded-md placeholder-px-4 focus:border-green-500 border-green-500" placeholder="Last name" name="FirstName" />
          </div>
          </div>
          <div className="">
            <p className="text-center py-2 text-lg ">Student_id  and  birthday date</p>
            <div className="flex  justify-center gap-5">
            <div className="flex justify-center">
            <input type="text" placeholder="Student id" className="border w-50 py-1 px-5 rounded-md placeholder:px-4 border-green-500 "/>
            </div>
            <div className="flex justify-center">
            <DatePicker
            label="name"
            name="startDate"
            dateFormat="MM/dd/yyyy"
            placeholderText="Select a Date"
    
            className="border-green-500 border py-1 px-5 rouned-md"
            
            />
            </div>
            </div>
          </div>
        </form>
        <form></form>
      </div>
    </>
  );
}
export default AddStudent;
