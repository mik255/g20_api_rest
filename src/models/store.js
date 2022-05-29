const mongoose = require("mongoose")
const Schema = mongoose.Schema
const Product = require("./product")
const schema = new Schema({
    pix: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    products:[
        Product.schema
    ],
})

module.exports = mongoose.model('Store', schema)