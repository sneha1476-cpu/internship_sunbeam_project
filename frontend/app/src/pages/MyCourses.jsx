import React, { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import { getMyCourses } from "../services/studentServices"
import {Link} from 'react-router'

function MyCourses() {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    loadCourses()
  }, [])

  const loadCourses = async () => {
    const result = await getMyCourses()
    if (result.status === "success") {
      setCourses(result.data)
      
    }
  }

  return (
    <>
      <Navbar />

      <div className="container" style={{ paddingTop: "100px" }}>
        <h2 className="text-center fw-bold text-primary mb-5">
          My Enrolled Courses
        </h2>

        <div className="row g-4">
          {courses.map(course => (
            <div key={course.course_id} className="col-md-4">
              <div className="card shadow h-100 border-0">
                <div className="card-body">
                  <h5 className="fw-bold text-center text-dark mb-3">
                    {course.course_name}
                  </h5>

                  <p className="text-muted">{course.description}</p>

                  <ul className="list-group list-group-flush mb-3">
                    <li className="list-group-item">
                      <strong>Fees:</strong> ₹{course.fees}
                    </li>
                    <li className="list-group-item">
                      <strong>Start:</strong> {course.start_date}
                    </li>
                    <li className="list-group-item">
                      <strong>End:</strong> {course.end_date}
                    </li>
                    <li className="list-group-item">
                      <strong>Video Access:</strong> {course.video_expire_days} days
                    </li>
                  </ul>

                  <div className="d-grid">
                    <Link to={`/students/courses/${course.course_id}/videos`}>
                    <button className="btn btn-primary fw-semibold">Watch Videos</button>
                  </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {courses.length === 0 && (
            <p className="text-center text-muted">
              You have not enrolled in any courses yet.
            </p>
          )}
        </div>
      </div>
    </>
  )
}

export default MyCourses
