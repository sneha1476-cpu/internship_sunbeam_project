

import React from 'react'
import { Link } from 'react-router'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-info px-4">
      <div className="container-fluid">
        
        {/* Left: Brand */}
        <Link className="navbar-brand fw-bold text-white" to="/">
          Student Portal
        </Link>

        {/* Toggle button (mobile) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          
          {/* Middle: Links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/home">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="/about">
                About
              </Link>
            </li>
          </ul>

          {/* Right: Login button */}
          <div>
            <Link to="/login" className="btn btn-outline-light">
              Login
            </Link>
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar

