import AdminNavbar from "./AdminNavbar";

function AdminLayout({ children }) {
  return (
    <>
      <AdminNavbar />
      <div className="container-fluid">
        {children}
      </div>
    </>
  );
}

export default AdminLayout;
