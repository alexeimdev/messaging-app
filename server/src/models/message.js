const mongoose = require('mongoose');

const Message = mongoose.model("Message", {
    "_id": mongoose.Types.ObjectId,
    "author": String,
    "recipients": [ String ],
    "message": String,
    "date": Date
});

module.exports = Message;