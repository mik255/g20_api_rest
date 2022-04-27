'use strict'
const express = require("express")
const router = express.Router()
const controller = require("../core/mobile_config/config_controller")

router.get('/',controller.get) 
router.post('/',controller.post)
router.put('/:id',controller.put)

module.exports = router