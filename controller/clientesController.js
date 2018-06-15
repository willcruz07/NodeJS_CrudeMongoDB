const Clientes = require('../models/Clientes');

const clientesController = {};

clientesController.listar((req, res) => {
    Clientes.find({}).exec((err, clientes) => {
        if (err) {
            console.log(err);
        } else {
            res.render('../views/clientes/index', {info: clientes});
        }
    });
});