var express = require('express');
const { chatGet, chat } = require('../controler/chat');
var router = express.Router();

/* GET users listing. */
router.post('/', chat);
router.get('/get', chatGet);

module.exports = router;