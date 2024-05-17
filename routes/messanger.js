var express = require('express');
const { messanger, converstation, getConverstation, messangerId, messangerIds } = require('../controler/messanger');
var router = express.Router();

/* GET users listing. */
router.post('/post', messanger);
router.post('/converstation', converstation);
router.post('/get', getConverstation);
router.post('/getId', messangerId);
router.post('/getIds', messangerIds);

module.exports = router;