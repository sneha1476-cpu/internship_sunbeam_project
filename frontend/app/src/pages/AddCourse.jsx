


import React, { useState } from "react";
import { toast } from "react-toastify";
import { addCourse } from "../services/courseServices";
import { useNavigate } from "react-router";

export default function AddCourse() {
  const navigate = useNavigate();

  const [course, setCourse] = useState({
    course_id: "",
    course_name: "",
    description: "",
    fees: "",
    start_date: "",
    end_date: "",
    video_expire_days: "",
  });

  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await addCourse(course);
    if (res.status === "success") {
      toast.success("Course added");
      navigate("/courses");
    } else {
      toast.error("Add failed");
    }
  };

  return (
    <div className="container mt-5">
      <h3 className="text-primary mb-4">Add Course</h3>

      <form onSubmit={handleSubmit}>
        {Object.keys(course).map((key) => (
          <div className="mb-3" key={key}>
            <label className="form-label text-capitalize">
              {key.replace("_", " ")}
            </label>
            <input
              type={key.includes("date") ? "date" : "text"}
              className="form-control"
              name={key}
              value={course[key]}
              onChange={handleChange}
              required
            />
          </div>
        ))}

        <button className="btn btn-primary">Add Course</button>
      </form>
    </div>
  );
}
