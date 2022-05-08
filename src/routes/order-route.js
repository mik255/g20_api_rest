'use strict'
const express = require("express")
const router = express.Router()
const controller = require("../controller/order-controller")

router.get('/',controller.get) 
router.get('/:id',controller.getById)
router.post('/',controller.post)
router.put('/:id',controller.put)
router.delete('/finishedSection',controller.finishedSection)

module.exports = router