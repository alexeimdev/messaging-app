const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    "sent": Date,
    "authorId": String,
    "recipients": mongoose.Types.Array,
    "status": String, // Pending, Received, Failed (retry), 
    "type": String, // Text, Voice, Photo, Video, Link (with preview) 
    "content": String,
    "seenBy": mongoose.Types.Array,
    "seenByAll": Boolean,
});

module.exports = messageSchema;