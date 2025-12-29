import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/sunbeam-logo.png";

function StudentNavbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.clear();
    navigate("/home");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info px-4">
      <Link className="navbar-brand d-flex align-items-center" to="/sunbeam">
        <img src={logo} height="30" className="me-2" />
        <strong>Sunbeam</strong>
      </Link>

      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/home">Home</Link>
        </li>
        {token && (
          <li className="nav-item">
            <Link className="nav-link" to="/my-courses">My Courses</Link>
          </li>
        )}
      </ul>

      {!token ? (
        <button className="btn btn-light" onClick={() => navigate("/login")}>
          Login
        </button>
      ) : (
        <button className="btn btn-outline-light" onClick={logout}>
          Logout
        </button>
      )}
    </nav>
  );
}

export default StudentNavbar;
