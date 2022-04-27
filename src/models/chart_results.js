const mongoose = require("mongoose")
const Schema = mongoose.Schema

const schema = new Schema({
    total_price: 0,
    total_price_square:0,
    gross_profit:0,
    profit_margin: 0,
    sales_amount:0,
    average_ticket:0,
})
module.exports = mongoose.model('Chart_results', schema)