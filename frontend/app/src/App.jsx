import { Routes, Route, Navigate } from "react-router-dom";
import { createContext, useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CourseRegister from "./pages/CourseRegister";
import Courses from "./pages/Courses";
import MyCourses from "./pages/MyCourses";
import VideosPage from "./pages/VideoPage";
import Manage_courses from "./pages/Manage_courses";
import ManageVideos from "./pages/Manage_videos";
import AddCourse from "./pages/AddCourse";
import EditCourse from "./pages/EditCourse";
import { ToastContainer } from "react-toastify";
import AddVideo from "./pages/AddVideo";
import EditVideo from "./pages/EditVideo";
import ChangePassword from "./pages/ChangePassword";

export const LoginContext = createContext();

function App() {

  

  const [loginStatus, setLoginStatus] = useState(
    !!sessionStorage.getItem("token")
  );
  const userRole=sessionStorage.getItem('role')
  


  return (
    <LoginContext.Provider value={{ loginStatus, setLoginStatus}}>
      <Navbar />

      <Routes>
        {/* Common */}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={!loginStatus ? <Login /> : <Navigate to="/home" />} />
        <Route path="/register" element={<Register />} />
        
   
<Route path='/change-password/' element={loginStatus?<ChangePassword/>:<Navigate to='/login' replace/>}/>


        {/* Student */}
        {loginStatus && userRole === "student" && (
          <>
            <Route path="/courses" element={<Courses />} />
            <Route path="/mycourse" element={<MyCourses />} />
            <Route path="/register-course" element={<CourseRegister/>}/>
            <Route path="/students/courses/:course_id/videos" element={<VideosPage />} />
          </>
        )}

        {/* Admin */}
        {loginStatus && userRole === "admin" && (
          <>
            <Route path="/manage-courses" element={<Manage_courses />} />
            <Route path="/manage-videos" element={<ManageVideos />} />
            <Route path="/add-course" element={<AddCourse/>}/>
            <Route path="/edit-course/:id" element={<EditCourse />} />
            <Route path="/add-video" element={<AddVideo/>}/>
            <Route path="/edit-video/:id" element={<EditVideo/>}/>

          </>
        )}
       
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>

      <ToastContainer />
    </LoginContext.Provider>
  );
}

export default App;
