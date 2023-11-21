
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
mongoose.connect(process.env.CONECTIONSTRING )  // não precisso mais disso apos a versão 4.00: depois da CONECTIONSTRING { useNewUrlParser: true, useUnifiedTopology: true}
            .then( ()=> {
              console.log( "Conecteção do banco estabelecida" )
              app.emit("pronto");
            } )
            .catch( (err)=> { 
              console.log(err);
              if(err) throw err;
            });

module.exports = { app, mongoose, express }