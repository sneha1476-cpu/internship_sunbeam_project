import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/sunbeam-logo.png";

function Navbar() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#10c4e8" }}>
      <div className="container-fluid px-4">

        {/* LOGO */}
        <div className="navbar-brand d-flex align-items-center text-white">
          <img src={logo} height="36" className="me-2" />
          <strong>Sunbeam</strong>
        </div>

        {/* LEFT MENU */}
        <ul className="navbar-nav ms-4">
          <li className="nav-item">
            <Link className="nav-link text-white fw-semibold" to="/">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-white fw-semibold" to="/about">
              About
            </Link>
          </li>

          {token && (
            <li className="nav-item">
              <Link className="nav-link text-white fw-semibold" to="/my-courses">
                My Courses
              </Link>
            </li>
          )}
        </ul>

        {/* RIGHT MENU */}
        <div className="ms-auto">
          {token ? (
            <button className="btn btn-outline-light" onClick={logout}>
              Logout
            </button>
          ) : (
            <Link className="btn btn-light" to="/login">
              Login
            </Link>
          )}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
