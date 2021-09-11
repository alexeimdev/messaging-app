const express = require('express');

const test = express.Router();

test.get('/', (req, res) => {
    res.send("test root");
})

test.get('/:id', (req, res) => {
    res.send(`test id ${req.params.id}`);
})


module.exports = test;