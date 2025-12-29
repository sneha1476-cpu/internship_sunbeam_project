import About from "./About";
import AdminLayout from "../components/AdminLayout";
import Footer from "../components/Footer";

function AdminAbout() {
  return (
    <>
      <AdminLayout>
        <About />
      </AdminLayout>

      {/* ✅ Footer ONLY for admin about */}
      <Footer />
    </>
  );
}

export default AdminAbout;
