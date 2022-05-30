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
        {
            type : mongoose.Schema.Types.ObjectId,
            ref:'Product',
        },
    ],
})

module.exports = mongoose.model('Store', schema)