require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const errorHandling = require('./middlewares/errorHandling')
const indexRouter = require('./routes/index')
const PORT = process.env.PORT || 4000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/', indexRouter)
app.use(errorHandling)


app.listen(PORT, console.log('listening to the port ', PORT))

module.exports = app