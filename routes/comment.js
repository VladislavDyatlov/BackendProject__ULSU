var express = require('express');
const { comment, commentGet } = require('../controler/comment');
var router = express.Router();

/* GET users listing. */
router.post('/', comment);
router.get('/get', commentGet);

module.exports = router; 