const mongoose = require('mongoose');

const Chat = mongoose.model("Chat", {
    messages: [
        mongoose.Types.ObjectId
    ]
});

module.exports = Chat;