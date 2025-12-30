
// import axios  from 'axios';
// export async function loginUser(email,password){
//     const URL="http://localhost:4000/user/login"
//     const body={email,password}
//     const response=await axios.post(URL,body)
    
//     return response.data
// }

// export async function registerCourse(name,email,course_id,mobile_no){
//     const URL="http://localhost:4000/courses/register-to-course"
//     const body={name,email,course_id,mobile_no
//     }
//     const response=await axios.post(URL,body)
    
//     return response.data
// }
import axios from 'axios';

export async function loginUser(email, password) {
  const URL = "http://localhost:4000/user/login";
  const body = { email, password };

  const response = await axios.post(URL, body);
  return response.data;
}

export async function registerUser( email, password,role) {
  const URL = "http://localhost:4000/user/register";
  const body = { email, password,role};

  // ✅ READ TOKEN FROM sessionStorage
  // const token = sessionStorage.getItem('token');

  const response = await axios.post(URL,body);

  return response.data;
}
