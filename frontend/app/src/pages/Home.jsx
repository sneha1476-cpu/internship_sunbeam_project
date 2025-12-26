import React from 'react'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import { useEffect } from 'react'
import { getActiveCourses } from '../services/courseServices'
import { Link } from 'react-router'
import course from '../assets/course.webp'
// import { course } from '..public/courses.jpeg';

function Home() {
// for gettinf all courses
  // const [courses,setCourses]=useState([])
  // useEffect(()=>{
  //   getCourses()
  // },[])
  // const getCourses=async()=>{
  //   const result=await getActiveCourses()
  //   if(result.status=="success"){
  //     setCourses(result.data)
  //   }
  // }
  return (
    <div>
      <Navbar/>
      <div className="container mt-2" style={{textAlign:"center" }}>
        <h4>Available Courses</h4>
      </div>




  


      <div className='container mt-4'>
        <div className='row'>

                <div className="col-md-4 mt-3">
                  <div className="card">
                    <img src={course} className="card-img-top" alt="course" style={{height: "100%",objectFit: "cover" ,width: "100%"}} />

                            <div className="card-body">
                              <h5 className="card-title">MERN</h5>
                              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                              <Link href="#" className="btn btn-primary">Go somewhere</Link>
                            </div>
                  </div>
                </div>

          {/* <div className="card col-4 me-5 ms-5 mt-3" style={{width: "18rem"}}>
             <img src={course} className="card-img-top" alt="course" style={{height: "100%",objectFit: "cover" ,width: "100%"}} />

              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                <Link href="#" className="btn btn-primary">Go somewhere</Link>
              </div>
            </div> */}

            {/* card 2 */}
                           <div className="col-md-4 mt-3">
                  <div className="card">
                    <img src={course} className="card-img-top" alt="course" style={{height: "100%",objectFit: "cover" ,width: "100%"}} />

                            <div className="card-body">
                              <h5 className="card-title">Card title</h5>
                              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                              <Link href="#" className="btn btn-primary">Go somewhere</Link>
                            </div>
                  </div>
                </div>

            

            {/* card 3 */}
                  <div className="col-md-4 mt-3">
                  <div className="card">
                    <img src={course} className="card-img-top" alt="course" style={{height: "100%",objectFit: "cover" ,width: "100%"}} />

                            <div className="card-body">
                              <h5 className="card-title">Card title</h5>
                              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                              <Link href="#" className="btn btn-primary">Go somewhere</Link>
                            </div>
                  </div>
                </div>

        </div>
      </div>

                {/* Active courses by mapping with query */}
                {/* <div className="container">
                            <div className="row">
                                {courses.map(e => {
                                    return <div className="mt-3 col-4">
                                        <div className="card" style={{ width: "20rem" }}>
                                            <div className="card-body">
                                                <h5 className="card-title" style={{ height: "2rem" }}>{e.course_name}</h5>
                                                <h6 className="card-subtitle mb-2 text-body-secondary">{e.description}</h6>
                                                <p className="card-text" style={{ height: "3rem" }}>{e.start_date}</p>
                                                <h6 className="card-subtitle mb-2 text-body-secondary">Rs. {e.fees}</h6>
                                                <button className="btn btn-primary">View More</button>
                                            </div>
                                        </div>
                                    </div>
                                })}
                            </div>
                        </div> */}





    </div>
  )
}

export default Home
