const { Schema } = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique:true,
        //weap the white spece at the end of each string
        trim: true,
        minlength: 3
    },
},{
    timestamps: true,
});

const User = mongoose.model('User',userSchema);

module.exports = User;