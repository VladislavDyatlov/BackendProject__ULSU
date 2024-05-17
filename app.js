const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config();
const app = express();
const cors = require('cors');

app.get('/', (req, res) =>{
    res.send({"mess": "mnn"})
})

module.exports = app;
