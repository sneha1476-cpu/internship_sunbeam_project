import { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router'
import Login from './pages/Login'
import {ToastContainer} from 'react-toastify'


import Home from './pages/Home'
function App() {
 

  return (
    <>
 
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    <ToastContainer/>
   
     
    </>
  )
}

export default App
