
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
