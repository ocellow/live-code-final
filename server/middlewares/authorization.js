const { User, Report, Country } = require('../models')

function authorization(req, res, next) {
  Report
    .findOne({
      where: {
        id: req.params.id
      }
    })
    .then(data => {
      if (!data) {
        throw {
          status: 404,
          msg: "Data not found!"
        }
      } else if (data.UserId === req.user.id) {
        next()
      } else {
        throw {
          status: 400,
          msg: "Unauthorization!"
        }
      }
    })
    .catch(err => {
      next(err)
    })
}

module.exports = authorization