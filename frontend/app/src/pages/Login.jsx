
import React, { useContext, useState } from 'react'
import Navbar from '../components/Navbar'
import { Link, useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { loginUser } from '../services/userServices'
import { LoginContext } from "../App"
 import { jwtDecode } from "jwt-decode";


function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const { loginStatus, setLoginStatus } = useContext(LoginContext)

  const login = async () => {
    if (email === '') {
      toast.warn('Email must be entered')
    } else if (password === '') {
      toast.warn('Password must be entered')
    } else {
      const result = await loginUser(email, password)
    
        if (result.status === "success") {
          const token = result.data.token;

          const decoded = jwtDecode(token);
       

          sessionStorage.setItem("token", token);
          sessionStorage.setItem("email", decoded.email);
          sessionStorage.setItem("role", decoded.role);

          setLoginStatus(true);
          navigate("/");
        }
 else {
        toast.error(result.data)
      }
    }
  }

  return (
    <>
      <Navbar />

      {/* Full-page gradient background */}
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          minHeight: '100vh',
          paddingTop: '100px', // for fixed navbar
          background: 'linear-gradient(135deg, #0d6efd, #6610f2)',
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
            <h3 className="text-center mb-4 fw-bold text-primary">Login</h3>

            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-semibold">
                Email address
              </label>
              <input
                type="email"
                className="form-control border-primary"
                id="email"
                placeholder="Enter your email"
                onChange={e => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="form-label fw-semibold">
                Password
              </label>
              <input
                type="password"
                className="form-control border-primary"
                id="password"
                placeholder="Enter your password"
                onChange={e => setPassword(e.target.value)}
              />
            </div>

            <div className="d-grid mb-3">
              <button
                className="btn btn-primary btn-lg fw-semibold"
                onClick={login}
                style={{ transition: '0.3s' }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
              >
                Login
              </button>
            </div>

            <div className="text-center mt-2">
              <span className="text-muted">Don't have an account? </span>
              <Link to="/register" className="fw-semibold text-primary">
                Register here
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Login
