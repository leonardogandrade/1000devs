const express = require('express')
const server = express()
const routes = require('./src/routes')
const PORT = 3007

server.use(routes)

server.listen(PORT, function () {
    console.log(`aplicacao ouvindo na port ${PORT}`)
})
