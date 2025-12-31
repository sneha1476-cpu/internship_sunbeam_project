
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { getAllCourses, deleteCourse } from "../services/courseServices";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  const fetchCourses = async () => {
    const res = await getAllCourses();
    if (res.status === "success") {
      setCourses(res.data);
    } else {
      toast.error("Failed to fetch courses");
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this course?")) return;

    const res = await deleteCourse(id);
    if (res.status === "success") {
      toast.success("Course deleted");
      fetchCourses();
    } else {
      toast.error("Delete failed");
    }
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between mb-4">
        <h3 className="text-primary">Courses</h3>
        <button
          className="btn btn-primary"
          onClick={() => navigate("/add-course")}
        >
          + Add Course
        </button>
      </div>

      <div className="row">
        {courses.map((c) => (
          <div className="col-md-4 mb-4" key={c.course_id}>
            <div className="card shadow h-100">
              <div className="card-body">
                <h5 className="card-title">{c.course_name}</h5>
                <p className="card-text">{c.description}</p>

                <p><b>Fees:</b> ₹{c.fees}</p>
                <p><b>Start:</b> {c.start_date?.split("T")[0]}</p>
                <p><b>End:</b> {c.end_date?.split("T")[0]}</p>
                <p><b>Expire Days:</b> {c.video_expire_days}</p>
              </div>

              <div className="card-footer d-flex justify-content-between">
                <button
                  className="btn btn-sm btn-warning"
                  onClick={() => navigate(`/edit-course/${c.course_id}`)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(c.course_id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
