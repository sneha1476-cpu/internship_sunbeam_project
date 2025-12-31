


import React, { useEffect, useState } from "react";
import { getAllCourses } from "../services/courseServices";
import { useNavigate } from "react-router";

function Courses() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = async () => {
    const result = await getAllCourses();
    if (result.status === "success") {
      setCourses(result.data);
    }
  };
  return (
    <div className="mt-5 pt-4"style={{backgroundColor:"#d9d9d9"}} >

      {/* Page Title */}
      <h2
        className="text-center fw-bold mb-2"
        style={{ color: "#2c2c2c", letterSpacing: "0.5px" }}
      >
        Our Courses
      </h2>
 

  
    <div className="row g-4 mt-4">

        {courses.map((e) => (
          <div key={e.course_id} className="col-md-4">
            <div
              className="card h-100 shadow-sm border-0"
              style={{
                borderRadius: "16px",
                transition: "0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-6px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              <div className="card-body d-flex flex-column">

                {/* Course Name */}
                <h5 className="fw-bold text-center mb-1">
                  {e.course_name}
                </h5>

                {/* Course ID */}
                <p className="text-center text-muted small mb-3">
                  Course ID: {e.course_id}
                </p>

                <hr className="my-2" />

                {/* Description */}
                <p className="text-muted small mb-3 text-center">
                  {e.description}
                </p>

                {/* Details */}
                <div className="mb-2">
                  <strong>💰 Fees:</strong>{" "}
                  <span className="fw-semibold">₹ {e.fees}</span>
                </div>

                <div className="small mb-1">
                  <strong>📅 Start:</strong>{" "}
                  {new Date(e.start_date).toLocaleDateString()}
                </div>

                <div className="small mb-1">
                  <strong>📅 End:</strong>{" "}
                  {new Date(e.end_date).toLocaleDateString()}
                </div>

                <div className="small mb-3">
                  <strong>🎥 Video Access:</strong>{" "}
                  {e.video_expire_days} days
                </div>

                {/* Register Button */}
                <button
                  className="btn btn-primary w-100 mt-auto"
                  onClick={() => navigate("/register-course")}
                >
                  Register
                </button>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;







// // icon
// import React, { useEffect, useState } from "react";
// import { getAllCourses } from "../services/courseServices";
// import { useNavigate } from "react-router";

// function Courses() {
//   const [courses, setCourses] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     getCourses();
//   }, []);

//   const getCourses = async () => {
//     const result = await getAllCourses();
//     if (result.status === "success") {
//       setCourses(result.data);
//     }
//   };

//   return (
//     <div className="container mt-5 pt-4">
//       {/* Page Title */}
//       <h2 className="text-center fw-bold mb-5">
//         📘 Our Courses
//       </h2>

//       <div className="row g-4">
//         {courses.map((e) => (
//           <div key={e.course_id} className="col-md-4">
//             <div
//               className="card h-100 shadow-sm border-0"
//               style={{
//                 borderRadius: "14px",
//                 transition: "0.3s",
//               }}
//               onMouseEnter={(e) =>
//                 (e.currentTarget.style.transform = "translateY(-8px)")
//               }
//               onMouseLeave={(e) =>
//                 (e.currentTarget.style.transform = "translateY(0)")
//               }
//             >
//               <div className="card-body d-flex flex-column">

//                 {/* Course Name */}
//                 <h5 className="fw-bold text-primary mb-2">
//                   {e.course_name}
//                 </h5>

//                 {/* Course ID */}
//                 <span className="badge bg-secondary mb-2 w-fit">
//                   Course ID: {e.course_id}
//                 </span>

//                 {/* Description */}
//                 <p className="text-muted small mb-3">
//                   {e.description}
//                 </p>

//                 {/* Details */}
//                 <div className="mb-1">
//                   <strong>💰 Fees:</strong>{" "}
//                   <span className="text-success fw-semibold">
//                     ₹ {e.fees}
//                   </span>
//                 </div>

//                 <div className="mb-1 small">
//                   <strong>📅 Start:</strong>{" "}
//                   {new Date(e.start_date).toLocaleDateString()}
//                 </div>

//                 <div className="mb-1 small">
//                   <strong>📅 End:</strong>{" "}
//                   {new Date(e.end_date).toLocaleDateString()}
//                 </div>

//                 <div className="mb-3 small">
//                   <strong>🎥 Video Access:</strong>{" "}
//                   {e.video_expire_days} days
//                 </div>

//                 {/* Button */}
//                 <button
//                   className="btn btn-primary w-100 mt-auto"
//                   onClick={() => navigate("/register")}
//                 >
//                   Register
//                 </button>

//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Courses;
