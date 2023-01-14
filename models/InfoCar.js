const { Schema, model } = require('mongoose');

const InfoCarSchema = Schema({
    title: {
        type: String,
        index: true
    },
    description: {
        type: String,
    },
    created: {
        type: Date
    },
    img: {
        type: String
    },
});

InfoCarSchema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

InfoCarSchema.pre('save', function( next ) {
    this.created = new Date();
    next();
});

module.exports = model('InfoCar', InfoCarSchema );