const mysql2=require("mysql2")
const pool=mysql2.createPool({
    host:"10.49.246.108",
    user:"project",
    password:"manager",
    database:"project_db"
})

module.exports=pool