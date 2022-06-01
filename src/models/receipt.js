const mongoose = require("mongoose")
const Schema = mongoose.Schema
const Product = require("./product")
const schema = new Schema({   
    user_Id: {
        type : mongoose.Schema.Types.ObjectId,
        ref:'User',
        require:true
    },
    category_Id: {
        type : mongoose.Schema.Types.ObjectId,
        ref:'Category',
        require:true
    },
    ReceiptStories:[
        {
            store_id: {
                type : mongoose.Schema.Types.ObjectId,
                ref:'Store',
                require:true
            },

            products:[Product.schema]
        }
        ],
    date: {
        type: String,
        required: false,
    },
    total_price: {
        type: Number,
        required: false,
        default:0
    },
    total_price_square: {
        type: Number,
        required: false,
        default:0
    },
    payment_type: {
        type: String,
        enum: ['card','pix','money','logist'],
        required:true
    },
    
},

)

module.exports = mongoose.model('Receipt', schema)