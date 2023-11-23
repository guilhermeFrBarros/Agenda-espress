const { async } = require("regenerator-runtime");
const Login = require("../models/LoginModel");

//get /login
exports.index = (req, res) => {
  res.render('login');
  return;
};

exports.register = async function (req, res) {
  try {
    const login = new Login(req.body);
    try {
      await login.register();
      
    } catch (error) {
      console.log(error)
    }

    if (login.errors.length > 0) {
      console.log(login.errors.length);
      req.flash("errors", login.errors);
      req.session.save(function () {
        return res.redirect("/login");
      })
      return;
    }
    req.flash("success", "Seu Usario foi cadastrado com sucesso");
      req.session.save(function () {
        return res.redirect("/login");
    })

  } catch (error) {
    console.log(error);
    return res.render("404");
  }
}