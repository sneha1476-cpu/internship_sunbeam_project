import axios from "axios";
import config from "./config";

console.log("BASE_URL USED:", config.BASE_URL); // 🔥 debug

export const getActiveCourses = async () => {
  try {
    const response = await axios.get(
      `${config.BASE_URL}/course/active`
    );

    // backend uses createResult → { status, data }
    return {
      status: "success",
      data: response.data.data
    };
  } catch (error) {
    console.error("Axios error:", error);
    return {
      status: "error",
      data: []
    };
  }
};
