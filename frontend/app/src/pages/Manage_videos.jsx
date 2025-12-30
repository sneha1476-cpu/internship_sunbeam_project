import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { getAllVideos, deleteVideo } from "../services/videoServices";

export default function Videos() {
  const [videos, setVideos] = useState([]);
  const navigate = useNavigate();

  const fetchVideos = async () => {
    const res = await getAllVideos();
    if (res.status === "success") {
      setVideos(res.data);
    } else {
      toast.error("Failed to fetch videos");
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this video?")) return;

    const res = await deleteVideo(id);
    if (res.status === "success") {
      toast.success("Video deleted");
      fetchVideos();
    } else {
      toast.error("Delete failed");
    }
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between mb-4">
        <h3 className="text-primary">Videos</h3>
        <button
          className="btn btn-primary"
          onClick={() => navigate("/add-video")}
        >
          + Add Video
        </button>
      </div>

      <div className="row">
        {videos.map((v) => (
          <div className="col-md-4 mb-4" key={v.video_id}>
            <div className="card shadow h-100">
              <div className="card-body">
                <h5 className="card-title">{v.title}</h5>
                <p className="card-text">{v.description}</p>

                <p><b>Course ID:</b> {v.course_id}</p>
                <p><b>Added:</b> {v.added_at?.split("T")[0]}</p>

                <a
                  href={v.youtube_url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-sm btn-outline-primary"
                >
                  Watch Video
                </a>
              </div>

              <div className="card-footer d-flex justify-content-between">
                <button
                  className="btn btn-sm btn-warning"
                  onClick={() => navigate(`/edit-video/${v.video_id}`)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(v.video_id)}
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
