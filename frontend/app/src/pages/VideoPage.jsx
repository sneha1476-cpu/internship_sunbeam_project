

import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getVideos } from "../services/studentServices"

const getEmbedUrl = (url) => {
  const regExp =
    /(?:youtube\.com\/(?:.*v=|v\/|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  const match = url.match(regExp)
  return match ? `https://www.youtube.com/embed/${match[1]}` : null
}

export default function VideosPage() {
  const { course_id } = useParams()
  const [videos, setVideos] = useState([])

  useEffect(() => {
    async function fetchVideos() {
      try {
        const result = await getVideos(course_id)
        setVideos(Array.isArray(result) ? result : [])
      } catch (err) {
        console.error(err)
        setVideos([])
      }
    }
    fetchVideos()
  }, [course_id])

  return (
    <div>
      <h2 className="mt-5 text-primary" style={{ textAlign: "center" }}>
        Videos for Course {course_id}
      </h2>

      {videos.length === 0 ? (
        <p>No videos available</p>
      ) : (
        videos.map((video) => {
          const embedUrl = getEmbedUrl(video.youtube_url)

          return (
            <div key={video.video_id} style={{ marginBottom: "30px" }}>
              <h4>{video.title}</h4>
              <p>{video.description}</p>

              {embedUrl ? (
                <iframe
                  width="560"
                  height="315"
                  src={embedUrl}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <p style={{ color: "red" }}>
                  This video cannot be embedded
                </p>
              )}

              <p>{video.added_at}</p>
            </div>
          )
        })
      )}
    </div>
  )
}
