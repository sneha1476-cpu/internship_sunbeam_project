import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { toast } from "react-toastify";
import {
  getAllCourses,
  updateCourse,
} from "../services/courseServices";

export default function EditCourse() {
  const { id } = useParams();
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

  /* 🔹 Load course once */
  useEffect(() => {
    fetchCourse();
  }, []);

  const fetchCourse = async () => {
    const res = await getAllCourses();
    if (res.status === "success") {
      const selected = res.data.find(
        (c) => String(c.course_id) === String(id)
      );

      if (!selected) {
        toast.error("Course not found");
        navigate("/courses");
        return;
      }

      setCourse({
        course_id: selected.course_id,
        course_name: selected.course_name,
        description: selected.description,
        fees: selected.fees,
        start_date: selected.start_date?.split("T")[0] || "",
        end_date: selected.end_date?.split("T")[0] || "",
        video_expire_days: selected.video_expire_days,
      });
    }
  };

  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await updateCourse(course);
    if (res.status === "success") {
      toast.success("Course updated");
      navigate("/courses");
    } else {
      toast.error("Update failed");
    }
  };

  return (
    <div className="container mt-5">
      <h3 className="text-primary mb-4">Edit Course</h3>

      <form onSubmit={handleSubmit}>

        <div className="mb-3">
          <label className="form-label">Course ID</label>
          <input
            className="form-control"
            value={course.course_id}
            disabled
          />
        </div>

        <div className="mb-3">
          <label>Course Name</label>
          <input
            className="form-control"
            name="course_name"
            value={course.course_name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Description</label>
          <textarea
            className="form-control"
            name="description"
            value={course.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Fees</label>
          <input
            type="number"
            className="form-control"
            name="fees"
            value={course.fees}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Start Date</label>
          <input
            type="date"
            className="form-control"
            name="start_date"
            value={course.start_date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>End Date</label>
          <input
            type="date"
            className="form-control"
            name="end_date"
            value={course.end_date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Video Expire Days</label>
          <input
            type="number"
            className="form-control"
            name="video_expire_days"
            value={course.video_expire_days}
            onChange={handleChange}
          />
        </div>

        <button className="btn btn-primary">
          Update Course
        </button>
      </form>
    </div>
  );
}
