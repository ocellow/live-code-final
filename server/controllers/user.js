const { User } = require('../models')
const bcrypt = require('../helpers/bcrypt')
const jwt = require('jsonwebtoken')

class UserController {
  static login(req, res, next) {
    const { username, password } = req.body
    User
      .findOne({
        where: {
          username
        }
      })
      .then(data => {
        if (!data) {
          throw {
            status: 404,
            msg: "No User Found!"
          }
        } else if (bcrypt.compare(password, data.password)) {
          const payload = {
            username: username,
            id: data.id,
          }
          const token = jwt.sign(payload, process.env.JWT_SECRET)
          res.status(200).json({
            "token": token,
            "id": data.id,
            "username": data.username
          })
        } else {
          throw {
            status: 400,
            msg: 'Wrong Password!!'
          }
        }
      })
      .catch(err => {
        next(err)
      })
  }
}

module.exports = UserController