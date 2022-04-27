'use strict'
const mongoose = require("mongoose")
const repository = require('../repository/category-repository')

exports.get = async (req, res, next) => {
    try {
        var data = await repository.get()
        res.status(200).send(data)
    }catch(error){
     
        res.status(400).send({
            message: "erro ao carregar categorias",
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
            message: "erro ao carregar categorias",
            data: error
        })
    }
}

exports.post = async (req, res, next) => {
   try{
       var data = await repository.post(req.body);
        res.status(201).send({
            message: 'Categoria criada com sucesso',
            data:data
        })
    }catch(error) {
        res.status(400).send({
            message: 'erro ao criar Categoria', 
            data: error
        })
    }
}

exports.put = ('/:id', (req, res, next) => {
    const id = req.params.id 
    repository.put(id,req.body).then(e => {
        res.status(201).send({
            message: 'Categoria atualizada com sucesso com sucesso'
        })
    }).catch(error => {
        res.status(400).send({
            message: 'erro ao atualizar', data: error
        })
    })
})
exports.setStore = ('/', (req, res, next) => {
    repository.setStore(req.body).then(e => {
        res.status(201).send({
            message: 'Categoria atualizada com sucesso'
        })
    }).catch(error => {
        res.status(400).send({
            message: 'erro ao atualizar', data: error
        })
    })
})
// exports.delete = ('/', (req, res, next) => {
//     const id = req.params.id
//     repository.delete(id)
//     res.status(200).send(req.body)
// })