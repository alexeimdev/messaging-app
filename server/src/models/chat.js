const mongoose = require('mongoose');

const Chat = mongoose.model("Chat", {
    "_id": mongoose.Types.ObjectId,
    messages: [mongoose.Types.ObjectId]
});

module.exports = Chat;