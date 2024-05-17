var express = require('express');
const { signup, login } = require('../controler/auth');
var router = express.Router();

/* GET users listing. */
router.post('/signup', signup);
router.post('/login', login);

module.exports = router; 