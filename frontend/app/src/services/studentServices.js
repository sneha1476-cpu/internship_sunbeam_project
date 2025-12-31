import axios from "axios"

export async function getMyCourses() {
  const token = sessionStorage.getItem("token")

  const response = await axios.get(
    "http://localhost:4000/students/courses",
    {
      headers: {
        token: token
      }
    }
  )



  return response.data
}
export async function registerCourse(name, email, course_id, mobile_no) {
  const URL = "http://localhost:4000/courses/register-to-course";
  const body = { name, email, course_id, mobile_no };


  const token = sessionStorage.getItem('token');

  const response = await axios.post(URL,body,{
      headers: {
        token: token  
      }
    }
  );

  return response.data;
}

export async function getVideos(course_id) {
  const token = sessionStorage.getItem("token")

  const response = await axios.get(
    `http://localhost:4000/students/courses/${course_id}/videos`,
    {
      headers: { 
        token:token
     }
    }
  )

  return response.data
}
export async function ChangePWD(newpassword,confirmpassword){
  const token=sessionStorage.getItem("token")
  const email=sessionStorage.getItem('email')

  const body = { newpassword,confirmpassword };
  const response=await axios.put('http://localhost:4000/students/change-password',body,{
    headers:{
      token:token,
      email:email
    }
  })
  return response.data
}

