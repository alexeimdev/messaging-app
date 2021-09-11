const express = require('express');
const usersDb = require('../db/users.json');

const user = express.Router();

user.get('/', async (req, res) => {
    res.send(usersDb);
})

user.get('/:id', (req, res) => {
    res.send(usersDb.users.find(x => x.email == req.params.id));
})


module.exports = user;