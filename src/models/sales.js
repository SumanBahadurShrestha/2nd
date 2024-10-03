const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    quantity: {
        type: Number
    },
    price: {
        type: Number
    }
});

const sales = mongoose.model('sales', UserSchema);

module.exports = sales;