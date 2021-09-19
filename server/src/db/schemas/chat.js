const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    "created": Date,
    "name": String,
    "image": String,
    "status": String, // Online, Deleted, 
    "type": String, // Private, Group
    "owner": String,
    "participants": mongoose.Types.Array,
    "messages": mongoose.Types.Array,
});

module.exports = chatSchema;