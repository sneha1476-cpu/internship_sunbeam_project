import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminLayout from "../../components/AdminLayout";
import { getActiveCourses } from "../../services/courseService";
import courseImages from "../../utils/courseImages";

function AdminHome() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getActiveCourses().then((res) => {
      if (res.status === "success") {
        setCourses(res.data);
      }
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <AdminLayout>
        <h4 className="text-center mt-5">Loading courses...</h4>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="container mt-4">
        <h3 className="text-center mb-5">Available Courses</h3>

        <div className="row justify-content-center">
          {courses.map((course) => (
            <div key={course.id} className="col-md-3 mb-4">
              <div className="card shadow-sm h-100 text-center">
                <img
                  src={courseImages[course.courseName]}
                  className="card-img-top p-3"
                  style={{ height: "180px", objectFit: "contain" }}
                  alt={course.courseName}
                />

                <div className="card-body">
                  <h6 className="fw-bold mb-2">
                    {course.courseName}
                  </h6>

                  <p
                    className="text-muted mb-3"
                    style={{ fontSize: "13px" }}
                  >
                    Starts on:{" "}
                    {new Date(course.startDate).toLocaleDateString(
                      "en-IN",
                      {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      }
                    )}
                  </p>

                  <Link
                    to={`/course/${course.id}`}
                    className="btn btn-primary btn-sm px-3"
                  >
                    View More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}

export default AdminHome;
