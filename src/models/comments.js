const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    // _id: Number,
    title: String,
    author: String
});

const User = mongoose.model('comments', userSchema);

module.exports = User;