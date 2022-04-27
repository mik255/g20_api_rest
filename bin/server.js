'use strict';
const app = require('../src/app')
const http = require('http')
const debug = require('debug')('nodestr:server')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000

app.set('port',port)

const server = http.createServer(app)

app.use(bodyParser.urlencoded({
    extended: false
}));

server.listen(port)