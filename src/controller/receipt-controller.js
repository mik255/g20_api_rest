'use strict'
const mongoose = require("mongoose")
const repository = require('../repository/receipt-repository')

exports.getAll = async (req, res, next) => {
    try {
        var data = await repository.getAll()
        res.status(200).send(data)

    }catch(error){
        res.status(400).send({
            message: "erro ao carregar recibos",
            data: error
        })
    }
}
exports.getStoreReceiptsById = async (req, res, next) => {
    const id = req.params.id
    try {
        var data = await repository.getStoreReceiptsById(id)
        var totalValueFromAllReceipts = 0;
        data.forEach(e=>{
            totalValueFromAllReceipts+= e.total_price
        })
        totalValueFromAllReceipts = parseFloat(parseFloat(totalValueFromAllReceipts).toFixed(2));
        res.status(200).send({
            totalValueFromAllReceipts:totalValueFromAllReceipts
        })
    }catch(error){
        res.status(400).send({
            message: "erro ao carregar rebibos",
            data: error
        })
    }
}

exports.post = async (req, res, next) => {
   try{
    var body = req.body;
    var total_price =0;
    var total_price_square =0;
    body.stories.forEach((e=>{
        e.products.forEach(e=>{
            total_price+=e.price*e.count;
            total_price_square+=e.price_square*e.count;
        })
    }))
    body.total_price = total_price;
    body.total_price_square = total_price_square;
       var data = await repository.post(body);
        res.status(201).send({
            message: 'recibo criado com sucesso',
            data:data
        })
    }catch(error) {
        res.status(400).send({
            message: 'erro ao criar', 
            data: error
        })
    }
}

exports.put = async (req, res,) => {
    const id = req.params.id
    try{
        var data = await repository.put(req.body,id);
         res.status(201).send({
             message: 'recibo atualizado com sucesso',
             data:data
         })
     }catch(error) {
         res.status(400).send({
             message: 'erro ao atualizar', 
             data: error
         })
     }
}
exports.delete = async (req, res,) => {
    const id = req.params.id
    try{
        var data = await repository.delete(id);
         res.status(200).send({
             message: 'recibo deletado com sucesso',
             data:data
         })
     }catch(error) {
         res.status(400).send({
             message: 'erro ao deletar', 
             data: error
         })
     }
}
