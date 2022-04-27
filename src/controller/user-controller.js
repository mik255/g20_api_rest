'use strict'
const mongoose = require("mongoose")
const repository = require('../repository/user-repository')

exports.getAll = async (req, res, next) => {
    try {
        var data = await repository.getAll()
        res.status(200).send(data)
    }catch(error){
        res.status(400).send({
            message: "erro ao carregar usuarios",
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
            message: "erro ao carregar usuarios",
            data: error
        })
    }
}

exports.post = async (req, res, next) => {
   try{
       var data = await repository.post(req.body);
        res.status(201).send({
            message: 'Usuário criado com sucesso',
            data:data
        })
    }catch(error) {
        res.status(400).send({
            message: 'erro ao criar', 
            data: error
        })
    }
}
exports.postReceipts = async (req, res, next) => {
    try{
        var data = await repository.postReceipt(req.body);
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
exports.login = async (req, res, next) => {
    try{
    
        var data = await repository.login(req.body);
        if(!data){
            res.status(404).send({
                message: 'usuário não encontrado', 
                data: {}
            })
        }else{
            res.status(200).send({
                message: 'logado',
                data:data
            })
        }
        
     }catch(error) {
         res.status(400).send({
             message: error.toString(), 
             data: error
         })
     }
 }
exports.put = async (req, res,) => {
    const id = req.params.id
    try{
        var data = await repository.put(req.body,id);
         res.status(201).send({
             message: 'Usuário atualizado com sucesso',
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
             message: 'Usuário deletado com sucesso',
             data:data
         })
     }catch(error) {
         res.status(400).send({
             message: 'erro ao deletar', 
             data: error
         })
     }
}
