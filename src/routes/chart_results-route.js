'use strict'
const express = require("express")
const router = express.Router()
const controller = require("../controller/chart_results-controller")

router.get('/',controller.get) 
router.post('/users',controller.getUserResult)
// router.post('/',controller.post)
// router.put('/:id',controller.put)
// router.delete('/:id',controller.delete)

module.exports = router