import React, { useState } from "react";
import { toast } from "react-toastify";
import { addVideo } from "../services/videoServices";
import { useNavigate } from "react-router";

export default function AddVideo() {
  const navigate = useNavigate();

  const [video, setVideo] = useState({
    video_id: "",
    course_id: "",
    title: "",
    description: "",
    youtube_url: "",
  });

  const handleChange = (e) => {
    setVideo({ ...video, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await addVideo(video);
    if (res.status === "success") {
      toast.success("Video added");
      navigate("/videos");
    } else {
      toast.error("Add failed");
    }
  };

  return (
    <div className="container mt-5">
      <h3 className="text-primary mb-4">Add Video</h3>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Video ID</label>
          <input
            type="number"
            className="form-control"
            name="video_id"
            value={video.video_id}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Course ID</label>
          <input
            type="number"
            className="form-control"
            name="course_id"
            value={video.course_id}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Title</label>
          <input
            className="form-control"
            name="title"
            value={video.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Description</label>
          <textarea
            className="form-control"
            name="description"
            value={video.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>YouTube URL</label>
          <input
            className="form-control"
            name="youtube_url"
            value={video.youtube_url}
            onChange={handleChange}
            required
          />
        </div>

        <button className="btn btn-primary">Add Video</button>
      </form>
    </div>
  );
}
