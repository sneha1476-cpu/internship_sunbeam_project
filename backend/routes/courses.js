const express=require('express')
const result=require('../utils/result')
const config=require('../utils/config')
const pool=require('../db/pool')

const courseRouter=express.Router()

courseRouter.post('/register-to-course',(req,res)=>{
    const{course_id,email,name,mobile_no}=req.body

    const sql=`insert into students (course_id,email,name,mobile_no) values(?,?,?,?)`
    pool.query(sql,[course_id,email,name,mobile_no],(err,data)=>{
        res.send(result.createResult(err,data))
    })
    
})


courseRouter.get("/get-all-courses",(req,res)=>{
    const sql=`select * from courses`
    pool.query(sql,(err,data)=>{
        res.send(result.createResult(err,data));
    })
})

courseRouter.get("/get-courses-date",(req,res)=>{
    const {start_date,end_date}=req.body

    const sql=`select * from courses where start_date>=? and end_date>=?`
    pool.query(sql,[start_date,end_date],(err,data)=>{
        if(err){
            res.send(result.createResult(err))
        }
        if(data.length==0)
        {
            res.send(result.createResult("No any active courses"))
        }
        else{
             res.send(result.createResult(null,data));
        }
       
    })
})
courseRouter.post("/add",(req,res)=>{
    const {course_id,course_name,description,fees,start_date,end_date,video_expire_days}=req.body
    const sql=`insert into courses values(?,?,?,?,?,?,?) `
    pool.query(sql,[course_id,course_name,description,fees,start_date,end_date,video_expire_days],(err,data)=>{
        res.send(result.createResult(err,data))
    })
})

courseRouter.put("/update/:courseid",(req,res)=>{
    const {course_name,description,fees,start_date,end_date,video_expire_days}=req.body
    const course_id=req.params.courseid
    const sql=`update courses set course_name=?,description=?,fees=?,start_date=?,end_date=?,video_expire_days=? where course_id=? `
    pool.query(sql,[course_name,description,fees,start_date,end_date,video_expire_days,course_id],(err,data)=>{
        res.send(result.createResult(err,data))
    })
})
courseRouter.delete("/delete/:courseid",(req,res)=>{
    const course_id=req.params.courseid
    const sql=`delete from courses where course_id=?`
    pool.query(sql,[course_id],(err,data)=>{
        res.send(result.createResult(err,data))
    })
})
module.exports=courseRouter;