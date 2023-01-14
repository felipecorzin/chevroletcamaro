const { Schema, model } = require('mongoose');

// MSGCHAT
const msgChatSchema = new Schema({
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
});

msgChatSchema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

msgChatSchema.pre('save', function( next ) {
    this.created = new Date();
    next();
});

module.exports = model('MsgChat', msgChatSchema );