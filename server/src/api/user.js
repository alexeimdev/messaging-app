const express = require('express');
const mongoose = require('mongoose');
//const db = require('../db/db');
const usersDbStub = require('../db/stub/users.json');
const userModel = require('../models/userModel');

const user = express.Router();

user.get('/', async (req, res) => {
    const users = usersDbStub.users;
    console.log('[api.user]', 'users', users);
    res.send(users);
})

user.get('/test', async (req, res) => {
    try {
        const users = await userModel.find();
        console.log('[api.user.test]', 'users', users);
        res.send(users);
    } catch (error) {
        console.error('[api.user.test]', error);
        res.sendStatus(500);
    }
})

user.get('/:id', (req, res) => {
    const user = usersDbStub.users.find(x => x.email == req.params.id);
    console.debug('[api.user.id]', 'user', user);
    res.send(user);
})

module.exports = user;