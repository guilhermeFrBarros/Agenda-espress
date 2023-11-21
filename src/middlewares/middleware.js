exports.middleware = ( req, res, next ) => {
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
    if(err && 'EBADCSRFTOKEN' === err.code) {
      return res.send("erro 404");
    }
  };
  
  exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
  };
  