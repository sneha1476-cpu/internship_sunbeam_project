const express=require('express')
const router = express.Router()

const cryptojs=require('crypto-js')
const jwt=require('jsonwebtoken')

const pool =require("../Database/pool")
const result=require("../utils/result")
const config=require("../utils/config")



router.post('/login',(req,res)=>{
    const {email,password}=req.body
     const hashpassword=cryptojs.SHA256(password).toString()
   
    const sql='select * from users where email = ? and password =?'
    pool.query(sql,[email,hashpassword],(error,data)=>{
     
        if(error){
            res.send(result.createResult(error))
        }else if (data.length == 0){
            res.send(result.createResult("Invalid Email or Password"))
        }else{
            const user = data[0]
            const payload={
                email : user.email,
                role : user.role
                
            }
            const token=jwt.sign(payload,config.SECRET)
            const userdata={
               
                token

            }
            res.send(result.createResult(null,userdata))

        }
    })
})

router.get('/all_courses',(req,res)=>{
    const sql='select * from courses where end_date> curdate()'
    pool.query(sql,(error,data)=>{
        res.send(result.createResult(error,data))
    })
})



module.exports=router