var mongoose = require('mongoose');
var Funcionarios = require('../models/Funcionario');

var funcionariosController = {};

funcionariosController.list = function(req, res){
    Funcionarios.find({}).exec(function(err, funcionarios){
        if (err) {
            console.log(err);
        } else {
            res.render("../views/funcionarios/index", {funcionarios: funcionarios});
        }
    });
};

funcionariosController.show = function(req, res){
    Funcionarios.findOne({_id: req.params.id}).exec(function(err, funcionario){
        if (err) {
            console.log(err)
        } else {
            res.render('../views/funcionarios/show', {funcionario: funcionario})
        }
    });
};

funcionariosController.create = function(req, res){
    res.render('../views/funcionarios/create');
};

funcionariosController.save = function(req, res){
    var funcionario = new Funcionarios(req.body);

    funcionario.save(function(err){
        if (err) {
            console.log(err)
            res.render('../views/funcionarios/create');
        } else {
            console.log("Funcionario salvo com sucesso!");
            res.redirect('/funcionarios/show/' + funcionario._id);
        }
    });
};

funcionariosController.edit = function(req, res){
    Funcionarios.findOne({_id: req.params.id}).exec(function(err, funcionarios){
        if (err) {
            console.log(err);
        } else {
            res.render('../views/funcionarios/edit', {funcionarios: funcionarios});
        }
    });
};

funcionariosController.update = function(req, res){
    Funcionarios.findByIdAndUpdate(req.params.id, {$set: {nome: req.body.nome, endereco: req.body.endereco, 
    cargo: req.body.cargo, salario: req.body.salario}}, {new: true}, function(err, funcionarios){
        if (err){
            console.log(err)
            res.render('../views/funcionarios/edit', {funcionarios: req.body});
        }
        res.redirect('/funcionarios/show' + funcionarios._id);
    });
};

funcionariosController.delete = function(req, res){
    Funcionarios.remove({_id: req.params.id}, function(err){
        if (err) {
            console.log(err);
        } else {
            console.log('funcionario deletado');
            res.redirect('/funcionarios');
        }
    });
};

module.exports = funcionariosController;