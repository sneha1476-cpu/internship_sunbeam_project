import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import { getVideos } from "../services/studentServices"

export default function VideosPage() {
  const { course_id } = useParams()
  const [videos, setVideos] = useState([])

  useEffect(() => {
    async function fetchVideos() {
      try {
        const result = await getVideos(course_id)
        console.log("Videos data:", result)
        setVideos(Array.isArray(result) ? result : [])
      } catch (err) {
        console.error("Error fetching videos:", err)
        setVideos([])
      }
    }
    fetchVideos()
  }, [course_id])

  return (
    <div>
      <h2>Videos for Course {course_id}</h2>
      {videos.length === 0 ? (
        <p>No videos available</p>
      ) : (
        <ul>
          {videos.map(video => (
            <li key={video.video_id}>
              <h4>{video.title}</h4>
              <p>{video.description}</p>
              {video.youtube_url && (
                <iframe
                  width="560"
                  height="315"
                  src={video.youtube_url.replace("watch?v=", "embed/")}
                  title={video.title}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              )}
              <p>{video.added_at}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
