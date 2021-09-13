const express = require('express');
const mongoose = require('mongoose');
const usersDb = require('../db/users.json');

const user = express.Router();

user.get('/', async (req, res) => {
    res.send(usersDb);
})

user.get('/test', async (req, res) => {
    const conn = mongoose.createConnection("mongodb+srv://alexeimdev:reason10@cluster0.dopsm.mongodb.net/messaging-app?retryWrites=true&w=majority");
    const UserModel = conn.model("User", require('../models/schemas/user'))
    const users = await UserModel.find().exec();

    res.end();
})

user.get('/:id', (req, res) => {
    res.send(usersDb.users.find(x => x.email == req.params.id));
})



module.exports = user;