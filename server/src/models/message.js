const mongoose = require('mongoose');

const Message = mongoose.model("Message", require('../db/schemas/message'));
module.exports = Message;