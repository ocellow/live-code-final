const jwt = require('jsonwebtoken')

function authentication(req, res, next) {
  try {
    const token = req.headers.token
    const user = jwt.verify(token, process.env.JWT_SECRET)
    req.user = user
    next()
  } catch (error) {
    next({
      status: 401,
      msg: "INVALID TOKEN!"
    })
  }
}

module.exports = authentication