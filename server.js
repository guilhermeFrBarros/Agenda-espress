const { app, express, mongoose } = require("./src/conection/conectionBD");

const dotenv = require("dotenv");
dotenv.config();

const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");

const routes = require('./routes');
const path = require('path');
const { middleware, checkCsrfError, csrfMiddleware } = require("./src/middlewares/middleware");
const helmet = require("helmet");
const csrf = require("csurf");


app.use(express.urlencoded({ extended: true }));
app.use( express.json());
app.use(express.static(path.resolve(__dirname, 'public')));

// config session
const sessionOptions = session({
  secret: "123aadafaf82htrjhjyjt65921kHJG",
  store:   MongoStore.create({ mongoUrl: process.env.CONECTIONSTRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true
  }
})

app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(helmet());
app.use(csrf());


// minhas middlewares
app.use( middleware );
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);


app.on("pronto", ()=> {
  app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
  });
});
