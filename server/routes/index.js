const router = require('express').Router()
const userRouter = require('./user')
const countryRouter = require('./country')
const reportRouter = require('./report')
const authentication = require('../middlewares/authentication')

router.use('/users', userRouter)
router.use(authentication)
router.use('/countries', countryRouter)
router.use('/reports', reportRouter)

module.exports = router
