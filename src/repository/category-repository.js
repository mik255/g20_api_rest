'use strict'

const mongoose = require('mongoose')
const Category = require('../models/category')
const Store = require('../models/store')

exports.get = async () => {

    var res = await Category.find({}).populate
        ({ path: 'stores', populate: { path: 'products' } });
    return res
}
exports.getById = async (id) => {
    var res = await Category.findById(id).populate('stores')
    return res
}
exports.post = async (body) => {
    var category = new Category(body);
    await category.save()
}
exports.setStore = async (body) => {
    var category = await this.getById(body.categoryId)
    var store = new Store(body.store)
    var store_res = await store.save()
    category.stores.unshift(store_res.id)
    await category.save()
}
exports.put = async (id, body) => {
    let category = await Category.findById(id);
    category.set(body);
    await category.save();
}

exports.delete = async (id) => {
    await Category.findByIdAndDelete(id);
}