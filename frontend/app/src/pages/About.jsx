import React from "react"
import Navbar from "../components/Navbar"
import image from '../assets/sunbeam_hinjwdi.jpg'
import image_market from '../assets/sunbeam_market.jpg'
import sun_class from '../assets/sunbeam_class.jpg'



function About() {
  return (
    <>

      {/* Hero Section */}
     {/* Hero Section */}
<div
  className="text-white text-center"
  style={{
    background: "linear-gradient(135deg, #1e40af, #475569)", // same family as Home
    padding: "3.5rem 1rem" // slightly smaller than Home
  }}
>
  <h1 className="fw-bold mb-2">About Sunbeam Institute</h1>
  <p className="fs-6 text-light">
    Empowering Careers with Industry-Focused Training
  </p>
</div>


      {/* Campus Showcase Section */}
<div className="container my-5">
  <div className="row g-3 align-items-stretch">

    {/* Left Large Image */}
    <div className="col-md-7">
      <div className="position-relative h-100 shadow rounded overflow-hidden">
        <img
          src={sun_class}
          className="w-100 h-100"
          alt="Sunbeam Campus"
          style={{ objectFit: "cover", minHeight: "400px" }}
        />
        <div className="position-absolute bottom-0 start-0 w-100 p-4 bg-dark bg-opacity-50 text-white">
          <h4 className="fw-bold mb-1">Industry-Ready Learning Environment</h4>
          <p className="mb-0">
            Modern classrooms designed for practical and professional training
          </p>
        </div>
      </div>
    </div>

    {/* Right Side Images */}
    <div className="col-md-5">
      <div className="d-flex flex-column h-100 gap-3">

        <div className="position-relative shadow rounded overflow-hidden">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2nccPxQ9MMELrfoGBu-6IeEDpx9d31ARM1A&s"
            className="w-100"
            alt="Classroom"
            style={{ height: "190px", objectFit: "cover" }}
          />
          <div className="position-absolute bottom-0 start-0 w-100 p-2 bg-dark bg-opacity-50 text-white">
            <small className="fw-semibold">
              Interactive Classroom Sessions
            </small>
          </div>
        </div>

        <div className="position-relative shadow rounded overflow-hidden">
          <img
            src="https://www.sunbeaminfo.com/uploads/product_photo/20201217021953_12.jpg"
            className="w-100"
            alt="Training"
            style={{ height: "190px", objectFit: "cover" }}
          />
          <div className="position-absolute bottom-0 start-0 w-100 p-2 bg-dark bg-opacity-50 text-white">
            <small className="fw-semibold">
              Hands-on Practical Training
            </small>
          </div>
        </div>

      </div>
    </div>

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
              <img src={image_market} className="card-img-top" alt="Market Yard" style={{ height: "200px", objectFit: "cover" }}/>
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
              <img src={image} className="card-img-top" alt="Hinjawadi" style={{ height: "200px", objectFit: "cover" }}/>
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
