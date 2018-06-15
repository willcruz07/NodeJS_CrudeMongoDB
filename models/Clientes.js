var mongoose = require('mongoose');

var ClientesSchema = new mongoose.Schema({
    nome: String,
    endereco: String,
    telefone: String,
    email: String,    
    update_at: {type: Date, defaul: Date.now}    
});

module.exports = mongoose.model('Cliente', ClientesSchema);