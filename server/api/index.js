const express = require('express');
const user = require('./user');
const chat = require('./chat');
const test = require('./test');

const api = express.Router();

api.use('/user', user);
api.use('/chat', chat);
api.use('/test', test);

module.exports = api;