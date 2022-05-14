'use strict'
const express = require("express")
const router = express.Router()
const controller = require("../controller/store-controller")

router.get('/',controller.get) 
router.get('/:id',controller.getById)
router.post('/',controller.post)
router.put('/product/:id',controller.put)
router.post('/products',controller.setProduct)
router.delete('/:id',controller.delete)

module.exports = router