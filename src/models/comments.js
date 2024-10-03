const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    title: String,
    author: String
});

const User = mongoose.model('comments', userSchema);

module.exports = User;