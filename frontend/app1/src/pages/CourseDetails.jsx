import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import courseImages from "../utils/courseImages";

function CourseDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [course, setCourse] = useState(null);
  const token = localStorage.getItem("token");

  // ✅ Date formatter
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:4000/course/${id}`)
      .then((res) => setCourse(res.data.data));
  }, [id]);

  if (!course) {
    return <h4 className="text-center mt-4">Loading...</h4>;
  }

  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* LEFT IMAGE CARD */}
        <div className="col-md-5">
          <div className="card shadow p-4">
            <img
              src={courseImages[course.courseName]}
              alt={course.courseName}
              className="img-fluid rounded"
            />
          </div>
        </div>

        {/* RIGHT DETAILS */}
        <div className="col-md-7">
          <h3>{course.courseName}</h3>
          <p className="text-muted">{course.description}</p>

          <p>
            <b>Start Date:</b> {formatDate(course.startDate)}
          </p>
          <p>
            <b>End Date:</b> {formatDate(course.endDate)}
          </p>
          <p>
            <b>Fees:</b> ₹{course.fees}
          </p>

          {!token && (
            <p className="text-danger">
              Please login to register for this course
            </p>
          )}

          {token && (
            <button
              className="btn btn-success px-4"
              onClick={() => navigate(`/register/${course.id}`)}
            >
              Register to Course
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
