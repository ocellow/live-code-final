const router = require('express').Router()
const reportController = require('../controllers/report')

router.get('/', reportController.get)
router.post('/', reportController.create)
router.delete('/:id', reportController.destroy)

module.exports = router
