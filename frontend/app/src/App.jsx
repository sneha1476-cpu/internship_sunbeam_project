import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<Navigate to="/Home" />} />

        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Login" element={<Login />} />
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;
