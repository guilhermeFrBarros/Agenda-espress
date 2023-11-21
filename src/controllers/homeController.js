const HomeModel = require("../models/HomeModel");

//get /
exports.paginaInicial = (req, res) => {
  res.render('index', {
    titulo: 'Este será o título da página',
    numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  });
  return;
};

// post /
exports.trataPost = (req, res, next) => {
  res.send('Ei, sou sua nova rota de POST. => ' +req.csrfToken());
  return
};


//get /
// exports.paginaInicial = (req, res) => {
//   //  req.flash("info", "ola mundo");
//   //  req.flash("secess", "sucesso no carregamento"); 
//   console.log(req.flash("info"), req.flash("secess"));
//   req.session.userari = { teste: "teste2", logado: true, card: false };
//   console.log(req.session.user);
//   res.render('index');
//   return
// };


// formato objeto
/*
class HomeController { 8  11

  constructor(){
  }


  //routa.get ( / )
  paginaInicial(req,  res ) {

      res.render("index");
  }

  // route.post( "/",)
  trataPost(req,  res ){
      res.send("tratamento do post " + req.body.nome + "\n "+
      "outro campo -> "  + req.body.outrocampo + "<h1> ola </h1>");
  } 


}


module.exports = HomeController;
*/