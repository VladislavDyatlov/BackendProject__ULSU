var express = require('express');
const { curs, cursID } = require('../controler/curs');
var router = express.Router();

/* GET users listing. */
router.get('/get', curs);
router.get('/get/:id', cursID);

module.exports = router;