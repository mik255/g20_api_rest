
const express = require("express")
const router = express.Router()

var get = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: 'title',
        version: 'version'
    })
})

module.exports = router