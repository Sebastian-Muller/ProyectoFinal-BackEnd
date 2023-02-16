const express = require('express');
const { check } = require('express-validator');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
