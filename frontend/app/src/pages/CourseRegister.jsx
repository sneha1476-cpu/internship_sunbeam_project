// import React, { useState } from 'react'
// import { toast } from 'react-toastify'
// import { registerCourse } from '../services/userServices'
// import {Link, useNavigate } from 'react-router'

// function Register() {
//   const[course_id,setCourseId]=useState('')
//     const [email,setEmail]=useState('')
//     const [name,setName]=useState('')
//     const[mobile_no,setMobileNo]=useState('')
//     // const[profile_pic,setProfilePic]=useState('')
//     const navigate=useNavigate()
 

//      const register = async (event) => {
       
       
//         if(course_id=='')
//           toast.warn('course ID must be entered')

//         else if (email == '')
//             toast.warn('email must be entered')
//         else if (name == '')
//             toast.warn('name must be entered')
//         else if (mobile_no == '')
//             toast.warn('email must be entered')
       
//         else {
//             const result = await registerCourse(name,email,course_id,mobile_no,)
//             console.log(result)
//             if (result.status == 'success') {
             
//                 // dynamic navigation -> useNavigate()
//                 navigate('/login')
                
//                 toast.success('Successfully registerd to course')
//             }
//             else
//                 toast.error(result.data)
//         }
//     }    
//   return (
//     <div>
//        <div className="container-fluid pt-2">
//   <div className="row justify-content-center mt-4">
//     <div className="col-md-5 col-lg-4">

//       <div className="card shadow p-4">
//         <h3 className="text-center mb-3"></h3>

//         <div className="mb-3">
//           <label htmlFor="email" className="form-label">
//             course ID
//           </label>
//           <input type="number" className="form-control" id="email" placeholder="enter course ID" onChange={e=>setCourseId(e.target.value)}/>
//         </div>


//          <div className="mb-3">
//           <label htmlFor="email" className="form-label">
//             Email
//           </label>
//           <input type="email" className="form-control" id="email" placeholder="enter email" onChange={e=>setEmail(e.target.value)}/>
//         </div>


//          <div className="mb-3">
//           <label htmlFor="email" className="form-label">
//             Name
//           </label>
//           <input type="text" className="form-control" id="email" placeholder="enter Name" onChange={e=>setName(e.target.value)}/>
//         </div>


//          <div className="mb-3">
//           <label htmlFor="email" className="form-label">
//             Mobile Number
//           </label>
//           <input type="tel" className="form-control" id="email" placeholder="enter mobile number" onChange={e=>setMobileNo(e.target.value)}/>
//         </div>


//         <div className="d-grid">
//           <button className="btn btn-info text-white" onClick={register}> Register</button>
//         </div>
//          <div>
//                 Already have an account?then to login<Link to='/login' >Click Here</Link>
//             </div>

//       </div>

//     </div>
//   </div>
// </div>

//     </div>
//   )
// }

// export default Register


import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { registerCourse } from '../services/studentServices'
import { Link, useNavigate } from 'react-router'
import Navbar from '../components/Navbar'

function CourseRegister() {
  const [course_id, setCourseId] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [mobile_no, setMobileNo] = useState('')
  const navigate = useNavigate()

  const register = async () => {
    if (course_id === '') toast.warn('Course ID must be entered')
    else if (email === '') toast.warn('Email must be entered')
    else if (name === '') toast.warn('Name must be entered')
    else if (mobile_no === '') toast.warn('Mobile number must be entered')
    else {
      const result = await registerCourse(name, email, course_id, mobile_no)
      if (result.status === 'success') {
        navigate('/mycourse')
        toast.success('Successfully registered to course')
      } else toast.error(result.data)
    }
  }

  return (
    <>
      <Navbar />

      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          minHeight: '100vh',
          paddingTop: '100px', // for fixed navbar
          background: 'linear-gradient(135deg, #0d6efd, #6610f2)',
        }}
      >
        <div className="col-md-5 col-lg-4">
          <div
            className="card shadow-lg p-5"
            style={{
              borderRadius: '1rem',
              background: '#fff',
              transition: '0.3s',
            }}
          >
            <h3 className="text-center mb-4 fw-bold text-primary">Register</h3>

            <div className="mb-3">
              <label htmlFor="course_id" className="form-label fw-semibold">
                Course ID
              </label>
              <input
                type="number"
                className="form-control border-primary"
                id="course_id"
                placeholder="Enter course ID"
                onChange={e => setCourseId(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-semibold">
                Email
              </label>
              <input
                type="email"
                className="form-control border-primary"
                id="email"
                placeholder="Enter your email"
                onChange={e => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="name" className="form-label fw-semibold">
                Name
              </label>
              <input
                type="text"
                className="form-control border-primary"
                id="name"
                placeholder="Enter your name"
                onChange={e => setName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="mobile_no" className="form-label fw-semibold">
                Mobile Number
              </label>
              <input
                type="tel"
                className="form-control border-primary"
                id="mobile_no"
                placeholder="Enter mobile number"
                onChange={e => setMobileNo(e.target.value)}
              />
            </div>

            <div className="d-grid mb-3">
              <button
                className="btn btn-primary btn-lg fw-semibold"
                onClick={register}
                style={{ transition: '0.3s' }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
              >
                Register
              </button>
            </div>

            <div className="text-center mt-2">
              <span className="text-muted">Already have an account? </span>
              <Link to="/login" className="fw-semibold text-primary">
                Login here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CourseRegister