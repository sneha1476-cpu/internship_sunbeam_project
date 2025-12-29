import React from "react";
import Navbar from "../components/Navbar";

/* Vite-safe image URLs */
const sunbeamHinjwadi = new URL(
  "../assets/sunbeam_hinjwadi.jpg",
  import.meta.url
).href;

const sunbeamMarket = new URL(
  "../assets/sunbeam_marketyard.jpg",
  import.meta.url
).href;

function About() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="bg-dark text-white text-center py-5">
        <h1 className="fw-bold">About Sunbeam Institute</h1>
        <p className="lead">
          Empowering Careers with Industry-Focused Training
        </p>
      </div>

      {/* Carousel Section */}
      <div className="container my-5">
        <div
          id="sunbeamCarousel"
          className="carousel slide shadow rounded"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner rounded">

            {/* Slide 1 */}
            <div className="carousel-item active">
              <img
                src={sunbeamHinjwadi}
                className="d-block w-100"
                alt="Sunbeam Hinjawadi Campus"
                style={{ height: "400px", objectFit: "cover" }}
              />
            </div>

            {/* Slide 2 */}
            <div className="carousel-item">
              <img
                src={sunbeamMarket}
                className="d-block w-100"
                alt="Sunbeam Market Yard Campus"
                style={{ height: "400px", objectFit: "cover" }}
              />
            </div>

          </div>

          {/* Controls */}
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
        <h2 className="text-center fw-bold mb-4">Who We Are</h2>
        <p className="text-center text-muted">
          Sunbeam Institute delivers industry-focused technical training with
          real-world learning and expert faculty.
        </p>

        <h2 className="text-center fw-bold my-4">Our Branches</h2>

        <div className="row g-4 justify-content-center">

          {/* Market Yard Card */}
          <div className="col-md-4">
            <div className="card shadow">
              <img
                src={sunbeamMarket}
                className="card-img-top"
                alt="Market Yard Campus"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="fw-bold">Market Yard, Pune</h5>
                <p className="text-muted">
                  Sunbeam Chambers, Gultekdi, Pune – 411037
                </p>
              </div>
            </div>
          </div>

          {/* Hinjawadi Card */}
          <div className="col-md-4">
            <div className="card shadow">
              <img
                src={sunbeamHinjwadi}
                className="card-img-top"
                alt="Hinjawadi Campus"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
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
  );
}

export default About;
