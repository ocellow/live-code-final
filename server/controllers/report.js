const { Report, Country } = require('../models')

class ReportController {
  static get(req, res, next) {
    Report
      .findAll({
        include: [
          Country
        ],
        where: {
          UserId: req.user.id
        }
      })
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        next(err)
      })
  }
  static create(req, res, next) {
    const { cases, CountryId } = req.body
    Report
      .create({
        cases,
        CountryId,
        UserId: req.user.id
      })
      .then(data => {
        res.status(201).json(data)
      })
      .catch(err => {
        next(err)
      })
  }
  static destroy(req, res, next) {
    const destroy = Report.destroy({
      where: {
        id: req.params.id
      }
    })
    const findOne = Report.findOne({
      where: {
        id: req.params.id
      }
    })
    Promise.all([findOne, destroy])
      .then(data => {
        res.status(200).json({ country: data[0], report: "Successfully delete" })
      })
      .catch(err => {

      })
  }
}

module.exports = ReportController