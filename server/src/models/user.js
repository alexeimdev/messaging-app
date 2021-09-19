const mongoose = require('mongoose');

const User = mongoose.model("User", require('../db/schemas/user'));
module.exports = User;