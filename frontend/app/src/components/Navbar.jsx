

import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { LoginContext } from "../App";

function Navbar() {
  const { loginStatus, setLoginStatus } = useContext(LoginContext);
  const navigate = useNavigate();

  const userEmail = sessionStorage.getItem("email");
  const userRole=sessionStorage.getItem('role')

  const handleLogout = () => {
    sessionStorage.clear();
    setLoginStatus(false);
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/home">
          {userRole === "admin" ? "Sunbeam Admin Portal" : "Sunbeam Student Portal"}
        </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>


        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>

            {userRole === "student" && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/courses">All Courses</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/mycourse">My Courses</Link>
                </li>
              </>
            )}

            {userRole === "admin" && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/manage-courses">Manage Courses</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/manage-videos">Manage Videos</Link>
                </li>
              </>
            )}
          </ul>

          {/* RIGHT SIDE */}
          {loginStatus ? (
            <div className="dropdown">
              <button className="btn btn-outline-light dropdown-toggle" type="button" data-bs-toggle="dropdown" style={{color:"white", backgroundColor:"black"}} >
                {userEmail}
              </button>

              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <Link className="dropdown-item" to="/change-password">
                    Change Password
                  </Link>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <button className="dropdown-item text-danger" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link className="btn btn-outline-light" to="/login">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
