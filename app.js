const createError = require('http-errors')
const session = require('express-session')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')
const config = require('./server/config')
const schedular = require('./server/services/schedular-service')

const app = express()
app.use(cors())

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(
  session({
    secret: process.env.SESS_KEY,
    saveUninitialized: true,
    resave: true
  })
)
app.use(cookieParser())

// new schedular('1')

app.use(config.API.baseUrl, config.routes)

app.use(express.static(path.join(__dirname, 'public')))
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.send('Bad Request')
})

module.exports = app
