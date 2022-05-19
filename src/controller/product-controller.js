'use strict'
const mongoose = require("mongoose")
const repository = require('../repository/product-repository')

exports.get = async (req, res, next) => {
    try {
        var data = await repository.get()
        res.status(200).send(data)
    }catch(error){
        res.status(400).send({
            message: "erro ao carregar produtos",
            data: error
        })
    }
}

exports.post = async (req, res, next) => {
   try{
       var data = await repository.post(req.body);
        res.status(201).send({
            message: 'Produto criado com sucesso',
            data:data
        })
    }catch(error) {
        res.status(400).send({
            message: 'erro ao criar', 
            data: error
        })
    }
}

exports.put = async (req, res, next) => {
    const id = req.params.id
    try{
        var data = await repository.put(req.body,id);
         res.status(201).send({
             message: 'Produto atualizado com sucesso',
             data:data
         })
     }catch(error) {
         res.status(400).send({
             message: 'erro ao atualizar', 
             data: error
         })
     }
}
exports.delete = async (req, res, next) => {
    const id = req.params.id
    try{
        var data = await repository.delete(id);
         res.status(200).send({
             message: 'Produto deletado com sucesso',
             data:data
         })
     }catch(error) {
         res.status(400).send({
             message: 'erro ao deletar', 
             data: error
         })
     }
}

