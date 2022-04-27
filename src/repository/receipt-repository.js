'use strict'

const mongoose = require('mongoose')
const Receipt = mongoose.model('Receipt')
const User = mongoose.model('User')

exports.getAll = async () => {
    var res = await Receipt.find({})
    return res
}
exports.getUserReceipts = async (userId) => {
    var res = await User.findById(userId).populate('receipts')
    return res.receipts
}

exports.post = async (body) => {
    var total_price =0;
    var total_price_square =0;
    body.stories.forEach((e=>{
        e.products.forEach(e=>{
            total_price+=e.price*e.count;
            total_price_square+=e.price_square*e.count;
        })
    }))
    var receipt = new Receipt(body);
    receipt.total_price = total_price;
    receipt.total_price_square = total_price_square;
    await receipt.save()
}

exports.delete = async (id) => {
    await Receipt.findByIdAndDelete(id)
}

exports.put = async (body, id) => {
    let receipt = await Receipt.findById(id);
    receipt.set(body);
    await receipt.save();
}


