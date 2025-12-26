import axios  from 'axios';
export async function loginUser(email,password){
    const URL="http://10.89.133.143:4000/common/login"
    const body={email,password}
    const response=await axios.post(URL,body)
    
    return response.data
}