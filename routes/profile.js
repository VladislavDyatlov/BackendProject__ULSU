var express = require('express');
const { profile, profileGet } = require('../controler/profile');
var router = express.Router();

/* GET users listing. */
router.post('/', profile);
router.post('/get', profileGet);

module.exports = router;
