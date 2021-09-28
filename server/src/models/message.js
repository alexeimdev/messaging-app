const mongoose = require('mongoose');

const Message = mongoose.model("Message", {
    "author": String,
    "recipients": [ String ],
    "message": String,
    "date": { type: Date, default: Date.now }
});

module.exports = Message;