const jwt = require("jsonwebtoken")
const config = require("../utils/config")
const result = require("../utils/result")

module.exports = (req, res, next) => {
  const authHeader = req.headers.token

  if (!authHeader) {
    return res.send(result.createResult("Token required"))
  }

  // Expecting: Bearer <token>
const token = authHeader.startsWith("Bearer ") ? authHeader.split(" ")[1] : authHeader


  try {
    const decoded = jwt.verify(token, config.secret)
    req.user = decoded
    next()
  } catch (err) {
    return res.send(result.createResult("Invalid token"))
  }
}
