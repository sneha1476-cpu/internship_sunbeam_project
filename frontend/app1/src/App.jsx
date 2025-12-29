import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import FooterLayout from "./components/FooterLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import CourseDetails from "./pages/CourseDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyCourses from "./pages/MyCourses";
import VideoPlayer from "./pages/VideoPlayer";
import RegistrationForm from "./pages/RegistrationForm";

// ✅ ADMIN
import AdminHome from "./pages/admin/AdminHome";
import AdminAbout from "./pages/AdminAbout";   // ⭐ ADD THIS

function App() {
  return (
    <Routes>
      {/* STUDENT HOME */}
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />

      {/* STUDENT ABOUT */}
      <Route
        path="/about"
        element={
          <FooterLayout>
            <About />
          </FooterLayout>
        }
      />

      {/* AUTH */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* STUDENT COURSES */}
      <Route
        path="/course/:id"
        element={
          <Layout>
            <CourseDetails />
          </Layout>
        }
      />

      <Route
        path="/register/:courseId"
        element={
          <Layout>
            <RegistrationForm />
          </Layout>
        }
      />

      <Route
        path="/my-courses"
        element={
          <Layout>
            <MyCourses />
          </Layout>
        }
      />

      <Route
        path="/video/:id"
        element={
          <Layout>
            <VideoPlayer />
          </Layout>
        }
      />

      {/* ✅ ADMIN ROUTES (ISOLATED) */}
      <Route path="/admin" element={<AdminHome />} />
      <Route path="/admin/about" element={<AdminAbout />} />  {/* ⭐ ADD */}
    </Routes>
  );
}

export default App;
