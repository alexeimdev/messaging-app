const express = require('express');
const mongoose = require('mongoose');
const usersDbStub = require('../db/stub/users.json');
const userModel = require('../models/user');

const user = express.Router();

user.get('/', async (req, res) => {
    try {
        const users = await userModel.find();
        console.log('[api.user.test]', 'users', users);
        res.send(users);
    } catch (error) {
        console.error('[api.user.test]', error);
        res.sendStatus(500);
    }
})

user.get('/stub', async (req, res) => {
    const users = usersDbStub.users;
    console.log('[api.user.stub]', 'users', users);
    res.send(users);
})

user.get('/bulk/:results', async (req, res) => {
    const url = 'https://randomuser.me/api/?page=1&results=' + req.params.results;
    const response = await fetch(url);
    const responseJson = await response.json();
    const results = responseJson.results;

    console.log('[api.user.bulk:result]', 'results', results);
    res.send(results);
})

user.get('/:id', (req, res) => {
    const user = usersDbStub.users.find(x => x.email == req.params.id);
    console.debug('[api.user.id]', 'user', user);
    res.send(user);
})

module.exports = user;