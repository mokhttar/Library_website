import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "../Login/Login";
import TrendBooks from "./TrendsBooks";
import BooksInfo from "./BookInfo";
import { BookContext } from "./Slide";
import NavBare from "./NavBare";
import HomePage from "../AdminComponent/HomePage";
import LibraryData from "../AdminComponent/LibraryData";
import ManageStudent from "../AdminComponent/ManageStudent";
import ManageBooks from "../AdminComponent/ManageBooks"; 
import Cart from "./Cart";
function App() {
  const [BookInfo, setBookInfo] = useState([{}]);
  const [isVisible, setIsVisible] = useState(false);

  return (
    <BrowserRouter>
      <div>
        <BookContext.Provider
          value={{ BookInfo, setBookInfo, isVisible, setIsVisible }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Trends" element={<TrendBooks />} />
            <Route path="/BooksInfo" element={<BooksInfo />} />
            <Route path="/Admin/HomePage" element={<HomePage />} />
            <Route path="/Admin/LibraryData" element={<LibraryData />} />
            <Route path="/Admin/ManageStudent" element={<ManageStudent />} />
            <Route path="/Admin/ManageBooks" element={<ManageBooks />} />
            <Route path="/Cart" element ={<Cart/>}/>
    
          </Routes>
        </BookContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
