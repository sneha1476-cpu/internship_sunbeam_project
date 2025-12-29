import { Link, useNavigate } from "react-router-dom";

function AdminNavbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      {/* top bar */}
      <nav className="navbar navbar-dark bg-info px-4">
        <span className="navbar-brand fw-bold">Student Portal</span>

        <ul className="navbar-nav flex-row gap-3">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/admin">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/admin/about">
              About
            </Link>
          </li>
        </ul>

        <button className="btn btn-light btn-sm ms-auto" onClick={logout}>
          Logout
        </button>
      </nav>

      {/* second bar */}
      <nav className="navbar navbar-dark bg-primary">
        <ul className="navbar-nav flex-row mx-auto gap-4">
          <li className="nav-item text-white">Dashboard</li>
          <li className="nav-item text-white">Courses</li>
          <li className="nav-item text-white">Videos</li>
          <li className="nav-item text-white">Students</li>
        </ul>
      </nav>
    </>
  );
}

export default AdminNavbar;
