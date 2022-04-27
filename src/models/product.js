const mongoose = require("mongoose")
const Schema = mongoose.Schema

const schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    price:{
        type:Number,
        required:true
    },
    price_square: {
        type:Number,
        required:true
    },
    count: {
        type:Number,
        required:true
    },
  

})
module.exports = mongoose.model('Product', schema)