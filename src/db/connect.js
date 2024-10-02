const mongoose = require('mongoose');
const env = require('dotenv');
env.config();

const MONGODB_URI = process.env.MONGO_URL || 'mongodb://localhost:27017/';

mongoose
    .connect(MONGODB_URI)
    .then(() => {
        console.log("Mongoose Connected:")
    })
    .catch((err) => {
        console.log(err.message);
    })