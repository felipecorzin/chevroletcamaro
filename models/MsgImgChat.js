const { Schema, model } = require('mongoose');

// MSGIMGCHAT
const msgImgChatSchema = new Schema({
    roomname: {
        type: String
    },
    nickname: {
        type: String
    },
    message: {
        type: String
    },
    created: {
        type: Date
    },
    img: {
        type: String 
    },
});

msgImgChatSchema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

msgImgChatSchema.pre('save', function( next ) {
    this.created = new Date();
    next();
});

module.exports = model('MsgImgChat', msgImgChatSchema );