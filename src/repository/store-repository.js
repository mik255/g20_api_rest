'use strict'

const mongoose = require('mongoose')
const Store = require('../models/store')
const Product = require('../models/product')

exports.get = async () => {
    var res = await Store.find({}).populate('products')
    return res
}
exports.getById = async (id) => {
    var res = await Store.findById(id).populate('products')
    return res
}
exports.post = async (body) => {
    var store = new Store(body);
    await store.save()
}
exports.put = async(id,body) =>{
    // Update the product
let store = await Store.findById(id);
store.set(body);
await store.save();
}
exports.setProduct = async (body) => {
    var store = await this.getById(body.storeId)
    var product = new Product(body.product)
    var product_res = await product.save()
    store.products.unshift(product_res.id)
    await store.save()
}
