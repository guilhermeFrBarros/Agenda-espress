const HomeModel = require("../models/HomeModel");

//get /
exports.index = (req, res) => {
  res.render('index', {
    titulo: 'Este será o título da página'
   });
  return;
};
