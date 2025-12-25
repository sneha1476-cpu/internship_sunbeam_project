import { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router'
import Login from './pages/Login'
import {ToastContainer} from 'react-toastify'
import Dashboard from './pages/Dashboard'
function App() {
 

  return (
    <>
 
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    <ToastContainer/>
   
     
    </>
  )
}

export default App
