const mongoose = require("mongoose")
const Schema = mongoose.Schema

const schema = new Schema({
    name:{
        type: String,
    },
    indentify: {
        cpf: {
            type: String,
            
        },
        cnpj: {
            type: String,
            
        },
    },
    password: {
        type: String,
      
    },
    receipts:[
        {
            type : mongoose.Schema.Types.ObjectId,
            ref:'Receipt',
            required:false
        }
    ],    
})

module.exports = mongoose.model('User', schema)