import axios  from 'axios';
export async function loginUser(email,password){
    const URL="http://192.168.1.100:4000/common/login"
    const body={email,password}
    const response=await axios.post(URL,body)
    return response.data
}