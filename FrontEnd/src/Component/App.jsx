import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBare from './NavBare';
import Home from './Home';
import Login from "../componentslogin/login"
import TrendBooks from './TrendsBooks';

function App() {
  return (
    <BrowserRouter>
      <div>
     
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/booksName" element={<TrendBooks />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
