const express=require('express')
const result=require('../utils/result')
const pool=require('../db/pool')
const studentRouter=express.Router()
const cryptojs=require("crypto-js")
const authMiddleware = require("../middleware/authMiddleware")



studentRouter.post("/register-to-course",(req,res)=>{
    const {name,email,course_id,mobile_no}=req.body
    const sql=`insert into students (name,email,course_id,mobile_no) values(?,?,?,?)`
    pool.query(sql,[name,email,course_id,mobile_no],(err,data)=>{
        res.send(result.createResult(err,data))
    })
})



// http://localhost:4000/students/change-password
studentRouter.put("/change-password",(req, res) => {
  console.log("Hello")
  const { newpassword, confirmpassword } = req.body
  const email = req.headers.email
if (!newpassword) {
  return res.send(result.createResult("Password missing"))
}

 
  if (newpassword !== confirmpassword) {
    return res.send(
      result.createResult("Passwords do not match")
    )
  }

  const hashedPassword = cryptojs.SHA256(newpassword).toString()
  console.log("")

  const sql = `
    UPDATE users
    SET password = ?
    WHERE email = ?
  `

  pool.query(sql, [hashedPassword, email], (err, data) => {
    res.send(result.createResult(err, data))
  })
})




studentRouter.get("/courses", authMiddleware, (req, res) => {
  const email = req.user.email   // 🔥 FROM TOKEN

  const sql = `
    SELECT 
      c.course_id,
      c.course_name,
      c.description,
      c.fees,
      c.start_date,
      c.end_date,
      c.video_expire_days
    FROM students s
    INNER JOIN courses c ON s.course_id = c.course_id
    WHERE s.email = ?
  `

  pool.query(sql, [email], (error, data) => {
    res.send(result.createResult(error, data))
  })
})



studentRouter.get("/courses/:course_id/videos", authMiddleware, (req, res) => {
  const course_id = parseInt(req.params.course_id)
  if (isNaN(course_id)) return res.status(400).json({ message: "Invalid course ID" })

  const sql = "SELECT video_id, title, description, youtube_url, added_at FROM videos WHERE course_id = ?"

  pool.query(sql, [course_id], (err, results) => {
    if (err) {
      console.error("Database error:", err)
      return res.status(500).json({ message: "Internal server error", error: err.message })
    }

   
    if (!results.length) return res.status(404).json({ message: "No videos found for this course" })

    res.json(results)
  })
})





studentRouter.get("/video",(req,res)=>{
    const email= req.headers.email
    const sql=`select c.course_id,c.course_name,v.video_id,v.title,v.description,v.youtube_url,v.added_at from students s 
    inner join courses c on s.course_id=c.course_id 
    inner join videos v on c.course_id=v.course_id 
    where s.email=? and date_add(v.added_at,interval c.video_expire_days day)>=current_date()`
    pool.query(sql,[email],(error,data)=>{
        res.send(result.createResult(error,data))
    })
})


module.exports=studentRouter