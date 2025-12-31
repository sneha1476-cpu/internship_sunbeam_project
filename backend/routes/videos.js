const express=require('express')
const videoRouter=express.Router()
const pool=require('../db/pool')
const result=require('../utils/result')

videoRouter.get('/all-videos-by-courseId',(req,res)=>{
    const {course_id}=req.body;
    const sql=`select * from videos where course_id=?`
    pool.query(sql,[course_id],(err,data)=>{
        if(data.length==0){
            res.send(result.createResult("No videos "))
        }
        else{
            res.send(result.createResult(err,data))
        }
        // res.send(result.createResult(err,data))
    })
})
videoRouter.get('/all-videos',(req,res)=>{
    
    const sql=`select * from videos`
    pool.query(sql,(err,data)=>{
        if(data.length==0){
            res.send(result.createResult("No videos "))
        }
        else{
            res.send(result.createResult(err,data))
        }
        // res.send(result.createResult(err,data))
    })
})

videoRouter.post('/add',(req,res)=>{
    const {course_id,title,description,youtube_url}=req.body
    const sql=`insert into videos (course_id,title,description,youtube_url) values(?,?,?,?)`
    pool.query(sql,[course_id,title,description,youtube_url],(err,data)=>{
        res.send(result.createResult(err,data))
    })
})

videoRouter.put('/update/:videoid',(req,res)=>{
    const video_id=req.params.videoid
    const {course_id,title,description,youtube_url}=req.body
    const sql=`update videos set course_id=?,title=?,description=?,youtube_url=? where video_id=?`
    pool.query(sql,[course_id,title,description,youtube_url,video_id],(err,data)=>{
        res.send(result.createResult(err,data))
    })
})
videoRouter.delete('/delete/:videoid',(req,res)=>{
    const video_id=req.params.videoid
    const sql=`delete from videos where video_id=?`
    pool.query(sql,[video_id],(err,data)=>{
        res.send(result.createResult(err,data))
    })
})
module.exports=videoRouter