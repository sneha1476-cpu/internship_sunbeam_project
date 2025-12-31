const jwt = require("jsonwebtoken")
const result = require("./result")
const config = require("./config")

function authUser(req, res, next) {
  const path = req.originalUrl
  console.log("Requested Path:", path)

  // ✅ PUBLIC ROUTES (NO TOKEN REQUIRED)
  if (
    path.startsWith("/user/register") ||
    path.startsWith("/user/login") ||
    path.startsWith("/students/register-to-course")||
     path.startsWith("/courses/get-all-courses")
  ) {
    return next()
  }

  // 🔐 TOKEN REQUIRED FOR ALL OTHER ROUTES
  const token = req.headers.token

  if (!token) {
    return res.send(result.createResult("Token is missing"))
  }

  try {
    const payload = jwt.verify(token, config.secret)

    // ✅ attach user info to request
    req.user = payload

    next()
  } catch (ex) {
    return res.send(result.createResult("Token is Invalid"))
  }
}

module.exports = authUser
