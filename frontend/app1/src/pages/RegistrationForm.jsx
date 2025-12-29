import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function RegistrationForm() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [course, setCourse] = useState(null);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    mobile: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:4000/course/${courseId}`)
      .then(res => setCourse(res.data.data));
  }, [courseId]);

  const register = async () => {
    if (!token) {
      alert("Please login first");
      navigate("/login");
      return;
    }

    try {
      await axios.post(
        "http://localhost:4000/student/register-to-course",
        {
          courseId,
          fullName: form.fullName,
          email: form.email,
          mobile: form.mobile,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Course registered successfully");
      navigate("/my-courses");
    } catch (err) {
      alert(err.response?.data?.error || "Registration failed");
    }
  };

  if (!course) return <h4 className="text-center mt-5">Loading...</h4>;

  return (
    <div className="container mt-5">

      {/* COURSE SUMMARY */}
      <table className="table table-bordered w-50 mx-auto mb-4">
        <tbody>
          <tr>
            <th>Course Name</th>
            <td>{course.courseName}</td>
          </tr>
          <tr>
            <th>Fees (₹)</th>
            <td>{course.fees}</td>
          </tr>
        </tbody>
      </table>

      {/* REGISTRATION FORM */}
      <div className="card shadow mx-auto" style={{ maxWidth: 450 }}>
        <div className="card-body">
          <h4 className="text-center mb-4">Register to Course</h4>

          <input
            className="form-control mb-3"
            placeholder="Full Name"
            value={form.fullName}
            onChange={e => setForm({ ...form, fullName: e.target.value })}
          />

          <input
            className="form-control mb-3"
            placeholder="Email Address"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
          />

          <input
            className="form-control mb-4"
            placeholder="Mobile Number"
            value={form.mobile}
            onChange={e => setForm({ ...form, mobile: e.target.value })}
          />

          <button className="btn btn-info w-100" onClick={register}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
