const express = require('express');
const mongoose = require('mongoose');
const usersDb = require('../db/users.json');

const user = express.Router();

user.get('/', async (req, res) => {
    res.send(usersDb);
})

user.get('/test', async (req, res) => {
    const conn = mongoose.createConnection("mongodb+srv://alexeimdev:<password>@cluster0.dopsm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
    const userModel = conn.model("User", require('../models/schemas/user'))
    const users = await userModel.find();

    res.end();
})

user.get('/:id', (req, res) => {
    res.send(usersDb.users.find(x => x.email == req.params.id));
})



module.exports = user;