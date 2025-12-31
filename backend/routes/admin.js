const express=require('express')
const pool=require('../db/pool')
const result=require('../utils/result')
const adminRouter=express.Router()

adminRouter.get('/enrolled-students',(req,res)=>{
    const {course_id}=req.query
    const sql=`select * from students where course_id=?`

    pool.query(sql,[course_id],(err,data)=>{
        res.send(result.createResult(err,data))
    })
})
module.exports=adminRouter