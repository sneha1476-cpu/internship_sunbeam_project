const express=require("express")
const router=express.Router()
const result=require("../utils/result")
const cryptojs=require("crypto-js")
const pool=require("../Database/pool")
const config=require("../utils/config")
const jwt=require("jsonwebtoken")
const { error } = require("node:console")
const { isAdmin } = require("../utils/auth")

// GET
router.get("/get",isAdmin,(req,res)=>{
    const sql=`select *from courses order by start_date`
    pool.query(sql,(error,data)=>{
        res.send(result.createResult(error,data))
    })
})

router.get("/get-active-courses",isAdmin,(req,res)=>{
   const sql = `SELECT * FROM courses WHERE start_date >= CURDATE()`;

    pool.query(sql,(error,data)=>{
        res.send(result.createResult(error,data))
    })
})

// POST
router.post("/post",isAdmin,(req,res)=>{
    const {course_name,description,fees,start_date,end_date,video_expire_days}=req.body
    const sql=`insert into courses (course_name,description,fees,start_date,end_date,video_expire_days)values(?,?,?,?,?,?)`
    pool.query(sql,[course_name,description,fees,start_date,end_date,video_expire_days],(error,data)=>{
        res.send(result.createResult(error,data))
    })
})

// PUT
router.put("/put/:course_id",isAdmin,(req,res)=>{
    const course_id=Number(req.params.course_id)
    const {course_name,description,fees,start_date,end_date,video_expire_days}=req.body
    const sql=`update courses set course_name=?,description=?,fees=?,start_date=?,end_date=?,video_expire_days=? where course_id=?`
    pool.query(sql,[course_name,description,fees,start_date,end_date,video_expire_days,course_id],(error,data)=>{
        res.send(result.createResult(error,data))
    })
})

// DELETE
router.delete("/delete/:course_id",isAdmin,(req,res)=>{
    const course_id=Number(req.params.course_id)
    const sql=`delete from courses where course_id=?`
    pool.query(sql,[course_id],(error,data)=>{
        res.send(result.createResult(error,data))
    })
})

module.exports=router