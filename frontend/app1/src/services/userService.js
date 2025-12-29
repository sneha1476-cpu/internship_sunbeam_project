import axios from "axios";
import config from "./config";

/* ================= LOGIN ================= */
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(
      `${config.BASE_URL}/auth/signin`,
      { email, password }
    );
    return response.data;
  } catch (error) {
    return {
      status: "error",
      error: "Invalid email or password"
    };
  }
};

/* ================= REGISTER ================= */
export const registerUser = async (name, email, password, mobile) => {
  try {
    const response = await axios.post(
      `${config.BASE_URL}/auth/signup`,
      {
        name,
        email,
        password,
        mobile,
        role: "STUDENT"
      }
    );
    return response.data;
  } catch (error) {
    return {
      status: "error",
      error: "Registration failed"
    };
  }
};
