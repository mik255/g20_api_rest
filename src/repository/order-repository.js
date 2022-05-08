'use strict'

const mongoose = require('mongoose')
const Order = require('../models/orders')
const Store = require('../models/store')

exports.get = async () => {
    var res = await Order.find({}).populate('order.user')
    return res
}
exports.getById = async (id) => {
    var res = await Order.findById(id).populate('order.user')
    return res
}
exports.post = async (body) => {
    var order = new Order(body);
    await order.save()
}

exports.put = async (id, body) => {
    let order = await Order.findById(id);
    order.set(body);
    await order.save();
}

exports.finishedSection = async () => {
    return await Order.deleteMany({});
}