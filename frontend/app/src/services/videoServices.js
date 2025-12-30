
import axios from "axios";

const getToken = () => sessionStorage.getItem("token");

const authConfig = () => ({
  headers: {
    token: getToken() || "",
    "Content-Type": "application/json",
  },
});

export async function getAllVideos() {
  const URL = 'http://localhost:4000/videos/all-videos';
  const res = await axios.get(URL, authConfig());
  return res.data; 
}
export async function getAllVideosByID(course_id) {
  const URL = `http://localhost:4000/videos/all-videos-by-courseId`;
  try {
    // Send course_id in the request body (as backend expects)
    const res = await axios.get(URL, {
      headers: {
        token: getToken() || "",
        "Content-Type": "application/json",
      },
      data: { course_id }, // ✅ axios GET can send body using `data`
    });
    return res.data;
  } catch (err) {
    console.error("Error fetching videos:", err.response?.data || err.message);
    return { status: "error", data: [] };
  }
}


export async function addVideo(videoData) {
  const URL = "http://localhost:4000/videos/add";
  const res = await axios.post(URL, videoData, authConfig());
  return res.data;
}

export async function updateVideo(videoData) {
  const URL = `http://localhost:4000/videos/update/${videoData.video_id}`;
  const res = await axios.put(URL, videoData, authConfig());
  return res.data;
}



export async function deleteVideo(videoId) {
  const URL = `http://localhost:4000/videos/delete/${videoId}`;
  

  const res = await axios.delete(URL, {
    headers: {
      token: sessionStorage.getItem("token") || "",
      
    },
    data: { video_id: videoId },
  });
  return res.data;
}


// http://localhost:4000/videos/all-videos
// http://localhost:4000/videos/add
// http://localhost:4000/videos/update/1
// http://localhost:4000/videos/delete/10