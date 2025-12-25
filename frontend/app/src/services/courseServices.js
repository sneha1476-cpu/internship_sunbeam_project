import axios from "axios";

export async function getActiveCourses(){
    const URL="http://192.168.1.100:4000/courses/get-active-courses"
    const response=await axios.get(URL)
    return response.data
}