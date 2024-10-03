const mongoose = require('mongoose');
//const validator = require('validator')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        minlength: 5
    },
    email: {
        type: String,
        require: true,
        unique: [true, "Email id already used?"],
        // validate(value){
        //     if(!validator.isEmail(value)){
        //         throw new Error("invalid Email")
        //     }
        // }
    },
    phone:{
        type: Number,
        min: 10,
        require: true,
        unique: true
    },
    address:{
        type: String,
        require: true
    }
});

const StudentModel = mongoose.model('students', UserSchema);

module.exports = StudentModel;