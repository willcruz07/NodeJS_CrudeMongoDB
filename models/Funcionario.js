var mongoose = require('mongoose');

var FuncionariosSchema = new mongoose.Schema({
    nome: String,
    endereco: String,
    cargo: String,
    salario: Number,
    update_at: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Funcionario', FuncionariosSchema);