'use strict'
const express = require("express")
const router = express.Router()
const controller = require("../controller/category-controller")

router.get('/',controller.get) 
router.get('/:id',controller.getById)
router.post('/',controller.post)
router.put('/:id',controller.put)
router.post('/store',controller.setStore)
router.delete('/:id',controller.delete)

module.exports = router