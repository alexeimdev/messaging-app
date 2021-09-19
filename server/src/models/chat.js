const mongoose = require('mongoose');

const Chat = mongoose.model("Chat", require('../db/schemas/chat'));
module.exports = Chat;