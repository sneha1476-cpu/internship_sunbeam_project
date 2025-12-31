import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import { toast } from 'react-toastify'

import { ChangePWD } from '../services/studentServices'
import { useNavigate } from 'react-router-dom'
import { LoginContext } from '../App'
import { useContext } from 'react'



function ChangePassword() {
    const[newpassword,setNewPassword]=useState('')
    const[confirmpassword,setConfirmPassword]=useState('')
const {setLoginStatus}=useContext(LoginContext)


const navigate=useNavigate()
const changepassword = async () => {
  if (!newpassword.trim()) {
    toast.warn("Please enter new password");
    return;
  }

  if (!confirmpassword.trim()) {
    toast.warn("Please enter confirm password");
    return;
  }

  if (newpassword !== confirmpassword) {
    toast.warn("Passwords do not match");
    return;
  }

  try {
    const result = await ChangePWD(newpassword, confirmpassword);

    // CORRECT success check
    if (!result.data.error) {
      toast.success("Password changed successfully");
     sessionStorage.removeItem("token");
     sessionStorage.removeItem("role");
     sessionStorage.removeItem("email");
     setLoginStatus(false)

  // wait so user sees toast
 
    navigate("/login");

    } else {
      toast.error(result.data.error);
    }
  } catch (err) {
    toast.error("Server error");
    console.error(err);
  }
};

  return (
<>
<Navbar/>
      {/* Full-page gradient background */}
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          minHeight: '100vh',
          paddingTop: '100px', // space for fixed navbar
          background: 'linear-gradient(135deg, #6610f2, #0d6efd)',
        }}
      >
        <div className="col-md-5 col-lg-4">

          <div
            className="card shadow-lg p-5"
            style={{
              borderRadius: '1rem',
              background: '#fff',
              transition: '0.3s',
            }}
          >
            <h3 className="text-center mb-4 fw-bold text-primary">Change Password</h3>

            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-semibold">
                New Password
              </label>
              <input
                type="password"
                className="form-control border-primary"
                id="email"
                placeholder="Enter your new password"
                onChange={e => setNewPassword(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="form-label fw-semibold">
                 Confirm Password
              </label>
              <input
                type="password"
                className="form-control border-primary"
                id="password"
                placeholder="Enter your password"
                onChange={e => setConfirmPassword(e.target.value)}
              />
            </div>

            <div className="d-grid mb-3">
              <button
                className="btn btn-primary btn-lg fw-semibold"
                onClick={changepassword}
                style={{ transition: '0.3s' }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
              >
                Change Password
              </button>
            </div>

           
          </div>

        </div>
      </div>


</>
 ) 
}

export default ChangePassword

