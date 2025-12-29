const express=require("express")
const pool=require("../Database/pool")
const result=require("../utils/result")
const { isAdmin } = require("../utils/auth")


const router=express.Router()

router.get("/get/:course_id",isAdmin,(req,res)=>{
   const course_id= req.params.course_id;
   const sql=`SELECT * FROM videos WHERE course_id=?`;
   pool.query(sql,[course_id],(error,data)=>{
    res.send(result.createResult(error,data))
   })
})

router.post("/post",isAdmin,(req,res)=>{
    const {course_id,title,description,youtube_url}=req.body
    const sql=`INSERT INTO videos(course_id,title,description,youtube_url )values(?,?,?,?)`;
    pool.query(sql,[course_id,title,description,youtube_url],(error,data)=>{
        res.send(result.createResult(error,data))
    })
})

router.put("/put/:video_id",isAdmin,(req,res)=>{
    const video_id=req.params.video_id;
    const {course_id,title,description,youtube_url}=req.body
    const sql=`UPDATE videos SET 
    course_id=?,
    title=?,
    description=?,
    youtube_url=?
    WHERE video_id=? `;
     pool.query(sql,[course_id,title,description,youtube_url,video_id],(error,data)=>{
        res.send(result.createResult(error,data))
    })
})

router.delete("/delete/:video_id",isAdmin,(req,res)=>{
    const video_id=req.params.video_id;
    const sql=`DELETE FROM videos WHERE video_id=?`;
    pool.query(sql,[video_id],(error,data)=>{
        res.send(result.createResult(error,data))
    })
})

router.get("/get_student",isAdmin,(req,res)=>{
    const {course_id}=req.query;
    const sql=`SELECT * FROM students s inner join courses c on s.course_id=c.course_id where c.course_id=?`;
    pool.query(sql,[course_id],(error,data)=>{
        res.send(result.createResult(error,data))
    })
})

module.exports=router