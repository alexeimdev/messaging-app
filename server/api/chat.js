const express = require('express');

const chat = express.Router();

chat.get('/', (req, res) => {
    res.send("chat root");
})

chat.get('/:id', (req, res) => {
    res.send(`test id ${req.params.id}`);
})


module.exports = chat;