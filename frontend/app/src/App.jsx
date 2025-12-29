import { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router'

import {ToastContainer} from 'react-toastify'
import Login from "./pages/Login";

import "react-toastify/dist/ReactToastify.css";

import Home from './pages/Home'
import About from './pages/About'
function App() {
 

  return (
    <>
 
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    <ToastContainer/>
   
     
    </>
  )
}

export default App
