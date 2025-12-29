import { useLocation, useNavigate } from "react-router-dom";

function VideoPlayer() {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="container mt-3">
      <button className="btn btn-secondary mb-3" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h4>{state.title}</h4>
      <iframe
        width="100%"
        height="450"
        src={state.youtubeURL}
        title="Video"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoPlayer;
