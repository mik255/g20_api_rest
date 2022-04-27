'use strict'
const express = require("express")
const router = express.Router()
const controller = require("../controller/user-controller")

router.get('/:id',controller.getById) 
router.get('/',controller.getAll) 
router.post('/',controller.post)
router.post('/account/login',controller.login)
router.post('/account/receipts',controller.postReceipts)
router.put('/:id',controller.put)
router.delete('/:id',controller.delete)

module.exports = router