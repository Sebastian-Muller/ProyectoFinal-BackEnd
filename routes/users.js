const express = require('express');
const router = express.Router();
const usersController = required('../controllers/usersController')

/* GET users listing. */
router.get('/', usersControllers.getUsers);

module.exports = router;
