const jwt = require("jsonwebtoken")
const config = require("../utils/config")
const result = require("../utils/result")

module.exports = (req, res, next) => {
  const authHeader = req.headers.token

  if (!authHeader) {
    return res.send(result.createResult("Token required"))
  }

  const token = authHeader.split(" ")[1]

  try {
    const decoded = jwt.verify(token, config.secret)
    req.user = decoded        // 🔥 THIS WAS MISSING
    next()
  } catch (err) {
    return res.send(result.createResult("Invalid token"))
  }
}
