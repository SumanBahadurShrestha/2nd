const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    // _id:{
    //     type: Number
    // },
    quantity: {
        type: Number
    },
    price: {
        type: Number
    }
});

const sales = mongoose.model('sales', UserSchema);

module.exports = sales;