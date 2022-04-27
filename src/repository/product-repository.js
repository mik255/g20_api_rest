'use strict'

const mongoose = require('mongoose')

const Product = mongoose.model('Product')

exports.get = async () => {
    var res = await Product.find({})
    return res
}

exports.post =async (body) => {
    var product = new Product(body);
    await product.save()
}

exports.delete =async (id) => {
    await Product.findByIdAndDelete(id)
}

exports.put = async(body,id) =>{
let product = await Product.findById(id);
product.set(body);
await product.save();
}


