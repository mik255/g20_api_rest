'use strict'
const mongoose = require("mongoose")
const repository = require('../repository/order-repository')

exports.get = async (req, res, next) => {
    try {
        var data = await repository.get()
        res.status(200).send(data)
    }catch(error){
        res.status(400).send({
            message: "erro ao carregar pedidos",
            data: error
        })
    }
}

exports.getById = async (req, res, next) => {
    const id = req.params.id 
    try {
        var data = await repository.getById(id)
        res.status(200).send(data)
    }catch(error){
        res.status(400).send({
            message: "erro ao carregar pedido",
            data: error
        })
    }
}

exports.post = async (req, res, next) => {
   try{
       var data = await repository.post(req.body);
        res.status(201).send({
            message: ' pedido criada com sucesso',
            data:data
        })
    }catch(error) {
        res.status(400).send({
            message: 'erro ao criar pedido', 
            data: error
        })
    }
}

exports.put = ('/:id', (req, res, next) => {
    const id = req.params.id 
    repository.put(id,req.body).then(e => {
        res.status(201).send({
            message: 'pedido atualizado com sucesso com sucesso'
        })
    }).catch(error => {
        res.status(400).send({
            message: 'erro ao atualizar', data: error
        })
    })
})

exports.delete = ('/:id', (req, res, next) => {
    const id = req.params.id
    repository.delete(id)
    res.status(200).send(req.body)
})