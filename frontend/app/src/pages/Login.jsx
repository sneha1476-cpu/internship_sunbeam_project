import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import {Link, useNavigate} from 'react-router'
import {toast} from 'react-toastify'
import { loginUser } from '../services/userServices'


function Login() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate=useNavigate()
 

     const login = async (event) => {
        console.log('Sign in button clicked')
        console.log(`email - ${email}`)
        console.log(`password - ${password}`)
        if (email == '')
            toast.warn('email must be entered')
        else if (password == '')
            toast.warn('password must be entered')
        else {
            const result = await loginUser(email, password)
            console.log(result)
            if (result.status == 'success') {
              console.log("login")
                // dynamic navigation -> useNavigate()
                navigate('/home')
                
                toast.success('Login successful')
            }
            else
                toast.error(result.error)
        }
    }    
  
  

  return (
       <>
       <Navbar/>

    <div className="container-fluid pt-2">
  <div className="row justify-content-center mt-4">
    <div className="col-md-5 col-lg-4">

      <div className="card shadow p-4">
        <h3 className="text-center mb-3">Login</h3>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input type="email" className="form-control" id="email" placeholder="enter email" onChange={e=>setEmail(e.target.value)}/>
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="password" placeholder="enter password" onChange={e=>setPassword(e.target.value)} />
        </div>

        <div className="d-grid">
          <button className="btn btn-info text-white" onClick={login}> Login</button>
        </div>

      </div>

    </div>
  </div>
</div>

    </>


  )
}

export default Login


//  import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router'
// import { loginUser } from '../services/userServices'
// import { toast } from 'react-toastify'

// function Login() {
//     // Destructuring of array
//     const [email, setEmail] = useState('') // email
//     const [password, setPassword] = useState('')// password
//     const navigate = useNavigate()

//     const signin = async (event) => {
//         console.log('Sign in button clicked')
//         console.log(`email - ${email}`)
//         console.log(`password - ${password}`)
//         if (email == '')
//             toast.warn('email must be entered')
//         else if (password == '')
//             toast.warn('password must be entered')
//         else {
//             const result = await loginUser(email, password)
//             console.log(result)
//             if (result.status == 'sucess') {
//               sessionStorage.setItem('token', result.data.token)
//                 // dynamic navigation -> useNavigate()
//                 navigate('/home')
//                 toast.success('Login successful')
//             }
//             else
//                 toast.error(result.error)
//         }
//     }

//     return (
//         <div className='container w-50'>
//             <div className=" mt-3 mb-3">
//                 <label for="inputEmail" className="form-label">Email</label>
//                 <input type="email" className="form-control" id="inputEmail" placeholder="Enter email" onChange={event => setEmail(event.target.value)} />
//             </div>

//             <div className="mb-3">
//                 <label for="inputPassword" className="form-label">Password</label>
//                 <input type="password" className="form-control" id="inputPassword" placeholder="Enter password" onChange={e => setPassword(e.target.value)} />
//             </div>

//             <div className="mb-3">
//                 <button className="btn btn-success" onClick={signin}>Signin</button>
//             </div>

//             <div>
//                 Don't have an account? then to register <Link to='/register' >Click Here</Link>
//             </div>
//         </div>
//     )
// }

// export default Login
