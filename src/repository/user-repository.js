'use strict'

const mongoose = require('mongoose')
const { populate } = require('../models/product')
const User = mongoose.model('User')
const Receipt = mongoose.model('Receipt')


exports.getAll = async () => {
    var res = await User.find({})
    return res
}
exports.login = async (body) => {
    console.log(body)
    return await User.findOne(
        {
            "indentify.cpf": body.indentify.cpf,
            "password": body.password
            },
        ).populate('receipts')
}
exports.post = async (body) => {
    var user = new User(body);
    await user.save()
}
exports.postReceipt = async (body) => {
    var user = await this.getById(body.receipt.userId)
 
   var receipt = new Receipt(body.receipt)
     var receipt_res = await receipt.save()
        user.receipts.unshift(receipt_res._id)

     await user.save()
}
exports.delete = async (id) => {
    await User.findByIdAndDelete(id)
}

exports.put = async (body, id) => {
    let user = await User.findById(id);
    user.set(body);
    await user.save();
}
exports.getById = async (id) => {
    let user = await User.findOne({ _id: id }).populate({
        path: 'receipts',
        model:'Receipt',
        populate: {
            path: 'ReceiptStories',
            populate: {
                path: 'store_id' ,
                model: 'Store',
              //  select: 'name'
              populate: {
                path: 'products' ,
                model: 'Product',
              //  select: 'name'
            } 
            } 
        }
}).exec()
    return user;
}

