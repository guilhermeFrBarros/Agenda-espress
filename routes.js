const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');
const loginControler = require("./src/controllers/LoginController");

function meuMiddlew( req, res, next ) {
    console.log();
    console.log("Passei no seu middleware -> nas rotas");
    next();
}

// Rotas da home
route.get('/', meuMiddlew, homeController.index);

//Rotas login
route.get("/login", loginControler.index);
route.post("/login/login", (req, res )=> res.send("funcionou"));
route.post("/login/register", loginControler.register);


// Rotas de contato
route.get('/contato', contatoController.paginaInicial);


module.exports = route;
