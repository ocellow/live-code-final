const router = require('express').Router()
const authorization = require('../middlewares/authorization')
const reportController = require('../controllers/report')

router.get('/', reportController.get)
router.post('/', reportController.create)
router.delete('/:id', authorization, reportController.destroy)

module.exports = router
