
const mongoose = require('mongoose')
const Mobile_config = mongoose.model('Mobile_config')

exports.get = async () => {
    var res = await Mobile_config.find({})
    return res[0]
}

exports.post = async (body) => {
    var config = new Mobile_config(body);
    await config.save()
}

exports.put = async(body,id) =>{
    let config = await Mobile_config.findById(id);
    config.set(body);
    await config.save();
    return config
    }