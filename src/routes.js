const express = require('express')
const routes = express.Router()
const { calculaIdade } = require('./controller/user-controller')

routes.get('/user', calculaIdade)

module.exports = routes