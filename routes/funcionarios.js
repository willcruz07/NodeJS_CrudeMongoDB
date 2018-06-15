var express = require('express');
var router = express.Router();

var funcionarios = require('../controller/funcionariosController.js');

router.get('/', (req, res) => funcionarios.list(req, res));
router.post('/save', (req, res) => funcionarios.save(req, res));
router.get('/show/:id', (req, res) => funcionarios.show(req, res));
router.get('/create', (req, res) => funcionarios.create(req, res));
router.get('/edit/:id', (req, res) => funcionarios.edit(req, res));
router.post('/update/:id', (req, res) => funcionarios.update(req, res));
router.post('/delete/:id', (req, res) => funcionarios.delete(req, res));

module.exports = router;
