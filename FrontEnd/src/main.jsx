import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./Component/App"
import "./Component/index.css"
//importing react-router dom  to creat our routes
import { BrowserRouter } from 'react-router-dom'
//importing Route to define  the routes
import { Route } from 'react-router-dom'
// import Routes  to  creat the routes with the elemnts
import { Routes } from 'react-router-dom'
import NavBare from './Component/NavBare'
import Home from './Component/Home'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
      <Routes>
      <Route
      path='/'
      element={<App/>}
      />
      <Route 
      path='/Home'
      element={<Home/>} 
      />  
  </Routes>
  </BrowserRouter>
  </React.StrictMode>,
)
