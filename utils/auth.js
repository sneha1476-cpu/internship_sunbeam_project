const jwt=require("jsonwebtoken")
const config=require("../utils/config")
const result=require("../utils/result")

function authUser(req,res,next){
    console.log("login called", req.path);
    
    const allAllowedUrls=['/common/login','/common/all_courses','/students/register'] 
    if (allAllowedUrls.includes(req.url)){
        next()
    }else{
        const token=req.headers.token
        if(!token){
            res.send(result.createResult('Token is missing'))
        }
        else{
            try{
            const payload=jwt.verify(token,config.SECRET)
            req.headers.email=payload.email
            req.headers.role=payload.role
            next()


        }catch(ex){
            res.send(result.createResult("token is invalid"))
  

        }
    
    }
}

}


function isAdmin(req, res, next) {
  const role = req.headers.role;
  console.log("current user role: ", role);

  if (role === "admin") {
    return next();
  }
  return res.send(result.createResult("UnAuthorized Access!"));
}

module.exports= {authUser,isAdmin}