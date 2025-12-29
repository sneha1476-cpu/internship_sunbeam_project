import { useEffect, useState } from "react";
import { getMyCourses, getVideosByCourse } from "../services/userCourses";
import { useNavigate } from "react-router-dom";

function MyCourses() {
  const [courses, setCourses] = useState([]);
  const [videos, setVideos] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getMyCourses().then(res => {
      if (res.status === "success") {
        setCourses(res.data);
      }
    });
  }, []);

  const loadVideos = async (courseId) => {
    if (videos[courseId]) return;
    const res = await getVideosByCourse(courseId);
    if (res.status === "success") {
      setVideos({ ...videos, [courseId]: res.data });
    }
  };

  return (
    <div className="container mt-4">
      <h3 className="text-center">My Courses</h3>

      {courses.map(c => (
        <div key={c.id} className="card mb-2">
          <div
            className="card-header"
            onClick={() => loadVideos(c.id)}
            style={{ cursor: "pointer" }}
          >
            {c.courseName}
          </div>

          {videos[c.id] && (
            <div className="card-body">
              {videos[c.id].map(v => (
                <p
                  key={v.id}
                  style={{ cursor: "pointer", color: "blue" }}
                  onClick={() => navigate(`/video/${v.id}`, { state: v })}
                >
                  ▶ {v.title}
                </p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default MyCourses;
