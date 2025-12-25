const mysql2=require("mysql2")
const pool=mysql2.createPool({
    host:"192.168.1.100",
    user:"project",
    password:"manager",
    database:"project_db"
})

module.exports=pool