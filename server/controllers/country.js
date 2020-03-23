const { Country } = require('../models')

class CountryController {

  static get(req, res, next) {
    Country
      .findAll()
      .then(data => res.status(200).json(data))
      .catch(err => { next(err) })
  }
}

module.exports = CountryController