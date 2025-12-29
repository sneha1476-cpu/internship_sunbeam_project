import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../services/userService";
import { toast } from "react-toastify";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signin = async () => {
    const result = await loginUser(email, password);

    if (result.status === "success") {
      const user = result.data.user ?? result.data;

      localStorage.setItem("token", result.data.token);
      localStorage.setItem("user", JSON.stringify(user));

      if (user.role === "ADMIN") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } else {
      toast.error(result.error);
    }
  };

  return (
    <div className="container w-50 mt-5">
      <h3>Login</h3>

      <input
        className="form-control mb-2"
        placeholder="Email"
        onChange={e => setEmail(e.target.value)}
      />

      <input
        type="password"
        className="form-control mb-2"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
      />

      <button className="btn btn-success" onClick={signin}>
        Login
      </button>

      <p className="mt-3">
        Not registered yet? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}

export default Login;
