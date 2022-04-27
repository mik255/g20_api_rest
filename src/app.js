const express = require("express")
const bodyParser = require("body-parser")

const Product = require('./models/product.js');
const User = require('./models/user.js');
const Category = require('./models/category.js');
const Store = require('./models/store.js');
const Receipt = require('./models/receipt.js');
const Chart_results = require('./models/chart_results');
const Order = require('./models/orders');
const config = require('./core/mobile_config/config_model')

const indexRoute = require('./routes/index-route')
const productRoute = require('./routes/product-route')
const categoryRoute = require('./routes/category-route')
const storeRoute = require('./routes/store-route')
const userRoute = require('./routes/user-route')
const receiptsRoute = require('./routes/receipt-route')
const chart_resultsRoute = require('./routes/chart_results-route')
const configRoute = require('./routes/config-route')
const OrderRoute = require('./routes/order-route')
const mongoose = require("mongoose")
var cors = require('cors');

mongoose.connect("mongodb+srv://Admin:Admin@cluster0.udlcp.mongodb.net/gvintedb?retryWrites=true&w=majority")
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use('/', indexRoute)
app.use('/products', productRoute)
app.use('/category', categoryRoute)
app.use('/store', storeRoute)
app.use('/users', userRoute)
app.use('/receipts', receiptsRoute)
app.use('/chart_results', chart_resultsRoute)
app.use('/config', configRoute)
app.use('/orders', OrderRoute)

module.exports = app