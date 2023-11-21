const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

function meuMiddlew( req, res, next ) {
    console.log();
    console.log("Passei no seu middleware -> nas rotas");
    next();
}

// Rotas da home
route.get('/', meuMiddlew, homeController.paginaInicial);
route.post('/', homeController.trataPost);

// Rotas de contato
route.get('/contato', contatoController.paginaInicial);


module.exports = route;
