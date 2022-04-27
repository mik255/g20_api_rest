const mongoose = require("mongoose")
const Product=require('./product')
const Schema = mongoose.Schema

const schema = new Schema({
    order:{
            user: {
                type : mongoose.Schema.Types.ObjectId,
                ref:'User',
                require:true
            },
            products:[Product.schema]
        }
})

module.exports = mongoose.model('Order', schema)