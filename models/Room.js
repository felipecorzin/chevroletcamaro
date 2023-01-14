const { Schema, model } = require('mongoose');

const RoomSchema = Schema({
    roomname: {
        type: String,
        index: true
    }
});

RoomSchema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

RoomSchema.pre('save', function( next ) {
    this.created = new Date();
    next();
});

module.exports = model('Room', RoomSchema );