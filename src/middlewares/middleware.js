exports.middleware = (req, res, next) => {
  console.log();
  res.locals.umaVariavelLocal = 'Este é o valor da variável local.';
  console.log("Passei no middleware global");
  console.log();
  next();
}

exports.outroMiddleware = (req, res, next) => {
  next();
};

exports.checkCsrfError = (err, req, res, next) => {
  if (err) {
    return res.render("404");
  }
  next();
};

exports.csrfMiddleware = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken();
  next();
};
