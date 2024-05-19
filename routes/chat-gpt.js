var express = require('express');
const { chatGpt } = require('../controler/chat-gpt');
var router = express.Router();

/* GET users listing. */
router.post('/', chatGpt);

module.exports = router;