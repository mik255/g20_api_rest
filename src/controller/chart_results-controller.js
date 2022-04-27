'use strict'
const mongoose = require("mongoose")
const Receipt_repository = require('../repository/receipt-repository')
const User = require('../models/user')
const Chart_results = require('../models/chart_results')

exports.get = async (req, res, next) => {
    try {
        var receipts = await Receipt_repository.getAll()
        var data = await calculateResults(receipts)
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send({
            message: "erro ao carregar resultados",
            data: error
        })
    }
}
exports.getUserResult = async (req, res, next) => {
    try {
        var userReceipts = await Receipt_repository.getUserReceipts(req.body.userId)
        var data = await calculateResults(userReceipts)
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send({
            message: "erro ao carregar resultados",
            data: error
        })
    }
}
async function calculateResults(receipts) {
    var chart_results = Chart_results.schema.obj
    chart_results.total_price = 0;
    chart_results.total_price_square=0;
    var count =0;
    receipts.forEach(element => {
        chart_results.total_price += element.total_price
        chart_results.total_price_square += element.total_price_square
        count+=1;
    });
    chart_results.gross_profit = chart_results.total_price_square - chart_results.total_price
    chart_results.profit_margin = (chart_results.gross_profit*100)/chart_results.total_price_square
    chart_results.average_ticket = chart_results.total_price/count
    chart_results.sales_amount = count
return chart_results;
}