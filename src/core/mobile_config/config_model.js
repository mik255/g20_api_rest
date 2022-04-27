const mongoose = require("mongoose")
const Schema = mongoose.Schema

const schema = new Schema({
    period: {
        type: Boolean,
        default:false,
        required: true,
    },
})
module.exports = mongoose.model('Mobile_config', schema)