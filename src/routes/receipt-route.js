'use strict'
const express = require("express")
const router = express.Router()
const controller = require("../controller/receipt-controller")

router.get('/storeReceipts/:id',controller.getStoreReceiptsById) 
router.get('/',controller.getAll) 
router.post('/',controller.post)
router.put('/:id',controller.put)
router.delete('/:id',controller.delete)

module.exports = router