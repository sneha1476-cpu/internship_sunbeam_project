import React from "react"
import Navbar from "../components/Navbar"
import sunbeamHinjwadi from "../assets/sunbeam_hinjwdi.jpeg"

function About() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="bg-dark text-white text-center py-5">
        <h1 className="fw-bold">About Sunbeam Institute</h1>
        <p className="lead">
          Empowering Careers with Industry-Focused Training
        </p>
      </div>

      {/* Carousel */}
      <div className="container my-5">
        <div
          id="sunbeamCarousel"
          className="carousel slide shadow rounded"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner rounded">
            <div className="carousel-item active">
              <img
                src="https://images.pexels.com/photos/3184313/pexels-photo-3184313.jpeg"
                className="d-block w-100"
                alt="Campus"
                style={{ height: "400px", objectFit: "cover" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
                className="d-block w-100"
                alt="Classroom"
                style={{ height: "400px", objectFit: "cover" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://images.pexels.com/photos/1181393/pexels-photo-1181393.jpeg"
                className="d-block w-100"
                alt="Training"
                style={{ height: "400px", objectFit: "cover" }}
              />
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#sunbeamCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#sunbeamCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>

      {/* About Content */}
      <div className="container mb-5">
        <div className="row mb-4">
          <div className="col text-center">
            <h2 className="fw-bold">Who We Are</h2>
            <p className="text-muted mt-3">
              Sunbeam Institute is a premier training organization focused on
              delivering high-quality education and skill development programs.
              We help students and professionals stay competitive by offering
              industry-relevant courses, experienced faculty, and practical
              learning.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="row text-center mb-5">
          <div className="col-md-6 mb-3">
            <div className="card shadow h-100">
              <div className="card-body">
                <h4 className="card-title fw-bold">Our Mission</h4>
                <p className="card-text">
                  To provide world-class technical and professional training
                  that transforms learners into industry-ready professionals.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-3">
            <div className="card shadow h-100">
              <div className="card-body">
                <h4 className="card-title fw-bold">Our Vision</h4>
                <p className="card-text">
                  To be the most trusted institute for career-oriented learning
                  and professional excellence.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Branches */}
        <h2 className="text-center fw-bold mb-4">Our Branches</h2>

        <div className="row g-4 justify-content-center">
          <div className="col-md-4">
            <div className="card h-100 shadow text-center">
              <img
                src={sunbeamHinjwadi}
                className="card-img-top"
                alt="Market Yard"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="fw-bold">Market Yard, Pune</h5>
                <p className="text-muted">
                  Sunbeam Chambers, Gultekdi, Pune – 411037
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow text-center">
              <img
                src="https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg"
                className="card-img-top"
                alt="Hinjawadi"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="fw-bold">Hinjawadi, Pune</h5>
                <p className="text-muted">
                  Rajiv Gandhi Infotech Park, Phase 2, Pune – 411057
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-light text-center py-3">
        <p className="mb-0">
          © 2025 Sunbeam Institute | All Rights Reserved
        </p>
      </footer>
    </>
  )
}

export default About
