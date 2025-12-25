const express=require("express")
const app=express()

const videoRouter=require("./routes/videos")

const {authUser,isAdmin}=require("./utils/auth")

const studentRouter=require("./routes/students")
const courseRouter=require("./routes/courses")
const commonRouter=require("./routes/common")

//middlewares
app.use(express.json())
app.use(authUser)

app.use("/courses",courseRouter)
app.use("/common",commonRouter)
app.use("/students",studentRouter)
app.use("/videos",videoRouter)


app.listen(4000,'192.168.1.100',()=>{
    console.log("Server started at port 4000")
})