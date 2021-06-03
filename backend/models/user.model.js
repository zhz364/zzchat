const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique:true,
        //weap the white spece at the end of each string
        trim: true,
        minlength: 2
    },
    passwordHash:{
        type: String,
        require: true
    }
},{
    timestamps: true,
});

const User = mongoose.model('User',userSchema);

module.exports = User;