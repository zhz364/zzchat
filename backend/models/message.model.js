const { Schema } = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    
    userId:{
        type: Number,
        required: true
    },
    body:{
        type: String,
        required: true,
        //weap the white spece at the end of each string
        trim: true
    },
    date:{
        type: Date,
        required: true
    }
},{
    timestamps: true,
});

const Message = mongoose.model('Message',messageSchema);

module.exports = Message;