const express = require("express")
const cryptojs = require("crypto-js")
const router = express.Router()
const result = require("../utils/result")

const pool = require("../Database/pool")

router.post("/register",(req, res) => {
    console.log("register irunning ")
    const { course_id, name, email, mobile_no } = req.body;

    const checkSql = `SELECT * FROM users WHERE email = ?`;
    pool.query(checkSql, [email], (error, data) => {
        if (error) return res.send(result.createResult(error));

        const insertStudent = () => {
            const studentSql = `INSERT INTO students(course_id,name,email,mobile_no) VALUES(?,?,?,?)`;
            pool.query(studentSql, [course_id, name, email, mobile_no], (err, studentData) => {
                return res.send(result.createResult(err, studentData));
            });
        };

        if (data.length > 0) {
            // user exists → just insert student
            insertStudent();
        } else {
            // user does not exist → insert user first, then student

            const userSql = `INSERT INTO users(email,password) VALUES(?,?)`;
            const hashedPassword = cryptojs.SHA256("sunbeam").toString()
            console.log("hashedPassword", hashedPassword);


            pool.query(userSql, [email, hashedPassword], (err) => {
                if (err) return res.send(result.createResult(err, null));
                insertStudent(); // insert student only after user insert succeeds
            });
        }
    });
});
  
router.put("/change_password",(req,res)=>{
    const { newPassword, confirmPassword } = req.body
    const email=req.headers.email
    if(newPassword.length>8)
    {
        res.send(result.createResult("Password should be 8 of characters "))
    }
    if (newPassword !== confirmPassword) {
        res.send(result.createResult("Passwords do not match"))
    } else {
        const sql = `update users
                 set password=?
                 where email=?`
        const hashedPassword = cryptojs.SHA256(newPassword).toString()
        pool.query(sql, [hashedPassword, email], (error, data) => {
            res.send(result.createResult(error, data))
        })
    }
})


router.get("/course", (req, res) => {
    const email = req.headers.email
    const sql=`select c.course_id,c.course_name,c.description,c.fees,c.start_date,c.end_date,c.video_expire_days from students s 
    inner join courses c on s.course_id=c.course_id where s.email=?`
    pool.query(sql,[email] ,(error, data) => {
        res.send(result.createResult(error, data))
    })
})


router.get("/video",(req,res)=>{
    const email= req.headers.email
    const sql=`select c.course_id,c.course_name,v.video_id,v.title,v.description,v.youtube_url,v.added_at from students s 
    inner join courses c on s.course_id=c.course_id 
    inner join videos v on c.course_id=v.course_id 
    where s.email=? and date_add(v.added_at,interval c.video_expire_days day)>=current_date()`
    pool.query(sql,[email],(error,data)=>{
        res.send(result.createResult(error,data))
    })
})
module.exports = router
