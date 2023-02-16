const express = require('express');
const { check } = require('express-validator');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.send('Lista de pokemons');
});

module.exports = router;
