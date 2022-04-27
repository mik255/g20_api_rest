const mongoose = require("mongoose")
const Store=require('./store').schema
const Schema = mongoose.Schema

const schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    stores:[{
            type : mongoose.Schema.Types.ObjectId,
            ref:'Store',
    }
    ],
})

module.exports = mongoose.model('Category', schema)