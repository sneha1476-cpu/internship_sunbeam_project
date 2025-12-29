import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

// Logo
import logoImg from "../assets/sunbeam-logo.png";

// Icons
import {
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <span>
          <FaPhoneAlt /> Pune : +91 1234567891
        </span>
      </div>

      {/* Header Main */}
      <div className="header-main">
        {/* Logo */}
        <div className="logo">
          <img src={logoImg} alt="Sunbeam Logo" />
        </div>

        {/* Running Text */}
        <div className="marquee-container">
          <div className="marquee-text">
            SUNBEAM Institute of Information Technology, Pune
          </div>
        </div>

        {/* Social Icons */}
        <div className="social-icons">
          <FaFacebookF className="facebook" />
          <FaTwitter className="twitter" />
          <FaLinkedinIn className="linkedin" />
          <FaYoutube className="youtube" />
          <FaInstagram className="instagram" />
        </div>
      </div>

      {/* Navbar */}
      <nav className="main-navbar">
        <ul>
          <li>ABOUT US</li>
          <li>COURSES</li>
          <li>INTERNSHIP</li>
          <li>CONTACT US</li>
        </ul>

        <div className="nav-right">
          <button className="login-btn" onClick={() => navigate("/login")}>
            Login
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;
