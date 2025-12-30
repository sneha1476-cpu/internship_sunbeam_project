// import axios from "axios";

// const API_URL = "http://localhost:4000/api/courses"; // replace with your backend URL

// export const getAllCourses = async () => {
//   try {
//     const res = await axios.get(API_URL);
//     return { status: "success", data: res.data };
//   } catch (error) {
//     console.error(error);
//     return { status: "error", data: [] };
//   }
// };

// export const deleteCourse = async (courseId) => {
//   try {
//     await axios.delete(`${API_URL}/${courseId}`);
//     return { status: "success" };
//   } catch (error) {
//     console.error(error);
//     return { status: "error" };
//   }
// };

// export const addCourse = async (courseData) => {
//   try {
//     await axios.post(API_URL, courseData);
//     return { status: "success" };
//   } catch (error) {
//     console.error(error);
//     return { status: "error" };
//   }
// };

// export const updateCourse = async (courseData) => {
//   try {
//     await axios.put(`${API_URL}/${courseData.COURSE_ID}`, courseData);
//     return { status: "success" };
//   } catch (error) {
//     console.error(error);
//     return { status: "error" };
//   }
// };


import axios from "axios";

const getToken = () => sessionStorage.getItem("token");

const authConfig = () => ({
  headers: {
    token: getToken() || "",
    "Content-Type": "application/json",
  },
});

export async function getAllCourses() {
  const URL = "http://localhost:4000/courses/get-all-courses";
  const res = await axios.get(URL, authConfig());
  return res.data; 
}


export async function addCourse(courseData) {
  const URL = "http://localhost:4000/courses/add";
  const res = await axios.post(URL, courseData, authConfig());
  return res.data;
}

export async function updateCourse(courseData) {
  const URL = `http://localhost:4000/courses/update/${courseData.course_id}`;
  const res = await axios.put(URL, courseData, authConfig());
  return res.data;
}



export async function deleteCourse(courseId) {
  const URL = `http://localhost:4000/courses/delete/${courseId}`;
  console.log("DELETE PARAMS:",+courseId);

  const res = await axios.delete(URL, {
    headers: {
      token: sessionStorage.getItem("token") || "",
      
    },
    data: { course_id: courseId },
  });
  return res.data;
}
