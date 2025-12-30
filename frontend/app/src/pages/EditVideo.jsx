import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { getAllVideos, updateVideo } from "../services/videoServices";

export default function EditVideo() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [video, setVideo] = useState({
    video_id: "",
    course_id: "",
    title: "",
    description: "",
    youtube_url: "",
  });

  useEffect(() => {
    fetchVideo();
  }, []);

  const fetchVideo = async () => {
    const res = await getAllVideos();
    if (res.status === "success") {
      const v = res.data.find(
        (x) => String(x.video_id) === String(id)
      );

      if (!v) {
        toast.error("Video not found");
        navigate("/videos");
        return;
      }

      setVideo({
        video_id: v.video_id,
        course_id: v.course_id,
        title: v.title,
        description: v.description,
        youtube_url: v.youtube_url,
      });
    }
  };

  const handleChange = (e) => {
    setVideo({ ...video, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await updateVideo(video);
    if (res.status === "success") {
      toast.success("Video updated");
      navigate("/videos");
    } else {
      toast.error("Update failed");
    }
  };

  return (
    <div className="container mt-5">
      <h3 className="text-primary mb-4">Edit Video</h3>

      <form onSubmit={handleSubmit}>
        <input className="form-control mb-3" value={video.video_id} disabled />

        <input
          className="form-control mb-3"
          name="course_id"
          value={video.course_id}
          onChange={handleChange}
          required
        />

        <input
          className="form-control mb-3"
          name="title"
          value={video.title}
          onChange={handleChange}
          required
        />

        <textarea
          className="form-control mb-3"
          name="description"
          value={video.description}
          onChange={handleChange}
          required
        />

        <input
          className="form-control mb-3"
          name="youtube_url"
          value={video.youtube_url}
          onChange={handleChange}
          required
        />

        <button className="btn btn-primary">Update Video</button>
      </form>
    </div>
  );
}
