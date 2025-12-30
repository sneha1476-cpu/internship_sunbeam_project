import React from "react"
import { useNavigate } from "react-router"

function Home() {
  const navigate = useNavigate()

  return (
    <>
      {/* HERO SECTION */}<section className="text-white" style={{
  background: "linear-gradient(135deg, #0a4178, #3b2789)",
  minHeight: "75vh",
  display: "flex",
  alignItems: "center"
}}>
  <div className="container">
    <div className="row align-items-center">

      {/* Left Text */}
      <div className="col-md-6">
        <h1 className="display-5 fw-bold mb-3">
          Welcome to <span className="text-warning">Sunbeam Institute</span>
        </h1>
        <p className="lead mb-4">
          Achieve your tech career goals with expert teaching & industry‑relevant training.
        </p>

        {/* Quick Stats (from real site) */}
        <div className="d-flex gap-3 mb-4 flex-wrap">
          <div className="text-center">
            <h2 className="fw-bold">25+</h2>
            <small>Years Experience</small>
          </div>
          <div className="text-center">
            <h2 className="fw-bold">50k+</h2>
            <small>Students Trained</small>
          </div>
          <div className="text-center">
            <h2 className="fw-bold">120+</h2>
            <small>Recruiters & Placements</small>
          </div>
        </div>

        {/* Buttons */}
        <div className="d-flex gap-2">
          <a href="/login" className="btn btn-warning btn-lg fw-semibold">
            Get Started
          </a>
          <a href="/about" className="btn btn-outline-light btn-lg fw-semibold">
            Explore
          </a>
        </div>
      </div>

      {/* Hero Image */}
      <div className="col-md-6 text-center">
        <img
          src="https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="Students Learning"
          className="img-fluid rounded shadow"
          style={{ maxHeight: "350px" }}
        />
      </div>

    </div>
  </div>
</section>



      {/* FEATURES SECTION */}
      <section className="container my-5">
        <h2 className="text-center fw-bold mb-5">
          Everything You Need in One Portal
        </h2>

        <div className="row g-4">
          {[
            {
              title: "Smart Course Enrollment",
              desc: "Register, switch, and manage courses seamlessly."
            },
            {
              title: "Progress Analytics",
              desc: "Visual performance tracking with real-time updates."
            },
            {
              title: "Placement Dashboard",
              desc: "Interview schedules, company info & placement stats."
            }
          ].map((feature, index) => (
            <div key={index} className="col-md-4">
              <div
                className="card h-100 shadow border-0 text-center p-4"
                style={{
                  transition: "0.3s",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-10px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <h5 className="fw-bold">{feature.title}</h5>
                <p className="text-muted mt-3">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ZIG-ZAG SECTION */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-md-6">
              <h3 className="fw-bold">Industry-Focused Learning</h3>
              <p className="text-muted mt-3">
                Curriculum designed with industry experts, real projects,
                and hands-on exposure.
              </p>
            </div>
            <div className="col-md-6 text-center">
              <div className="p-4 bg-white shadow rounded">
                MERN • Java • Cloud • DevOps • Data
              </div>
            </div>
          </div>

          <div className="row align-items-center flex-md-row-reverse">
            <div className="col-md-6">
              <h3 className="fw-bold">Career-Oriented Approach</h3>
              <p className="text-muted mt-3">
                Mock interviews, aptitude training, resume reviews,
                and placement assistance.
              </p>
            </div>
            <div className="col-md-6 text-center">
              <div className="p-4 bg-white shadow rounded">
                Resume • Interviews • Placement
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-5 text-center text-white"
        style={{ background: "linear-gradient(135deg, #6610f2, #0d6efd)" }}
      >
        <h2 className="fw-bold">Your IT Career Starts Here 🚀</h2>
        <p className="fs-5 mt-3">
          Join Sunbeam and transform your potential into success.
        </p>
        <button
          className="btn btn-warning btn-lg mt-3"
          onClick={() => navigate("/login")}
        >
          Join Now
        </button>
      </section>

      {/* FOOTER */}
      <footer className="bg-dark text-white text-center py-3">
        © {new Date().getFullYear()} Sunbeam Institute | Student Portal
      </footer>
    </>
  )
}

export default Home
