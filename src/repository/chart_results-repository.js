'use strict'

const mongoose = require('mongoose')

const Chart_results = mongoose.model('Chart_results')

exports.get = async () => {
    var res = await Chart_results.find({})
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


