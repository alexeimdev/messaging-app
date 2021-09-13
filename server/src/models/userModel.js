const mongoose = require('mongoose');

const user = mongoose.model("User", require('../db/schemas/user'));
module.exports = user;