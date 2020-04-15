const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

const carsRouter = require('../cars/cars-router');

const server = express();

server.use(helmet());
server.use(morgan('dev'));

server.use(express.json());
server.use(cors());

server.use('/api/cars', carsRouter);

module.exports = server;
