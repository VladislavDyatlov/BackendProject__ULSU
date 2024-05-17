const serverless = require('serverless-http');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config();
const app = express();
const cors = require('cors');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/', express.static(path.join(__dirname, 'public')));

app.use('/api/news', require('./routes/news'));
app.use('/api/profile', require('./routes/profile'));
app.use('/api/comment', require('./routes/comment'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/curs', require('./routes/curs'));
app.use('/api/chat', require('./routes/char'));
app.use('/api/messanger', require('./routes/messanger'));

const handler = serverless(app);
module.exports = handler;
module.exports = app;
