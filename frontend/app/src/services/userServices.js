import axios  from 'axios';
export async function loginUser(email,password){
    const URL="httpn://localhost:4000/user/login"
    const body={email,password}
    const response=await axios.post(URL,body)
    return response.data
}