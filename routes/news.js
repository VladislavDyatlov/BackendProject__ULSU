var express = require('express');
const { news } = require('../controler/news');
var router = express.Router();

/* GET users listing. */
router.get('/', news);

module.exports = router;
