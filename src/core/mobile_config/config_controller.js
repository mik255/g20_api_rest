const Mobile_Config = require('./config_model')
const repository = require('./config_repository')
exports.get = async (req, res, next) => {
    try {
        var data = await repository.get()
        res.status(200).send(data)
    }catch(error){
        res.status(400).send({
            message: "erro ao carregar config",
            data: error
        })
    }
}
exports.post = async (req, res, next) => {
    try{
        var data = await repository.post(req.body);
         res.status(201).send({
             message: 'config criado com sucesso',
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
             message: 'config atualizado com sucesso',
             data:data
         })
     }catch(error) {
         res.status(400).send({
             message: 'erro ao atualizar', 
             data: error
         })
     }
}