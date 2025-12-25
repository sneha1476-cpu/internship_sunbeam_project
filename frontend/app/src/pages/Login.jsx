import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import {Link, useNavigate} from 'react-router'
import {toast} from 'react-toastify'
import { loginUser } from '../services/userServices'

function Login() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate=useNavigate()
    const login=async()=>{
      if(email==='')
        toast.warn('email must be entered')
      else if(password==='')
        toast.warn('password should be entered')
      else{
        const result=await loginUser(email,password)
        if(result.status=='success'){
          navigate('/')
          toast.success('Login successful')
        }
        else{
          toast.error(result.error)
        }
      }
        
    }
  return (
       <>
       <Navbar/>

    <div className="container-fluid pt-2">
  <div className="row justify-content-center mt-4">
    <div className="col-md-5 col-lg-4">

      <div className="card shadow p-4">
        <h3 className="text-center mb-3">Login</h3>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input type="email" className="form-control" id="email" placeholder="enter email" onChange={e=>setEmail(e.target.value)}/>
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="password" placeholder="enter password" onChange={e=>setPassword(e.target.value)} />
        </div>

        <div className="d-grid">
          <button className="btn btn-info text-white"> Login</button>
        </div>

      </div>

    </div>
  </div>
</div>

    </>


  )
}

export default Login


