const route = require('express').Router()
const {register , login} = require('../controller/userCon')
const {profile, dashboard } = require('../controller/articlecon')
const firstMiddleware = require('../middleware/firstMiddleware')

route.post('/register' , register)
route.post('/login' , login)
route.get('/dashboard',firstMiddleware, dashboard)
route.get('/profile' , firstMiddleware, profile)

module.exports = route