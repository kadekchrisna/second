require('dotenv').config()

const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const async = require('async');
const path = require('path');
const morgan = require('morgan');
const xssFilter = require('x-xss-protection');

const notFound = require('./app/route/404').index;
const userRouter = require('./app/route/user');
const questionRouter = require('./app/route/question');
const port = process.env.PORT || 3000;

const app = express();
const parallelMiddleware = middlewares => (req, res, next) => async.each(middlewares, (mw, cb) => mw(req, res, cb), next);

global._ = require('lodash');
global.MISC = require(path.join(__dirname, '/app/helpers/misc'));

app.use(helmet());
app.use(xssFilter());
app.use(parallelMiddleware([
    bodyParser.json({ limit: '2mb' }),
    bodyParser.urlencoded({ extended: false, limit: '2mb', parameterLimit: 1000 }),
    morgan('dev'),
]));

app.use('/user', userRouter);
app.use('/question', questionRouter);
app.use(notFound);

app.listen(port);

module.exports = app;