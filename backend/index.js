const express = require('express');
const app = express();
const logger = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');
const engine = require('./bin/dataGenerator');

app.use(cors());
app.use(compression());
app.use(helmet());
app.use(hpp());
app.use(xss());
app.use(logger(':method :url :status :response-time ms :remote-addr'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/v1/', require('./v1/routes/api'));
engine();

module.exports = app;
