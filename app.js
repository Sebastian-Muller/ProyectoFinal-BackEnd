const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const pokemonsRouter = require('./routes/pokemons');

const connect=require('./db/db');

const app = express();

//MIDDLEWARES
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//RUTAS
app.use('/', indexRouter);
app.use("/pokemons", pokemonsRouter)

connect();

module.exports = app;
