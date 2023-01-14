const { Schema, model } = require('mongoose');

const EventoSchema = Schema({
    title: {
        type: String,
    },
    desc: {
        type: String,
    },
    start: {
        type: String,
    },
    end: {
        type: String
    },
    allDay: {
        type: Boolean
    }
});

EventoSchema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

module.exports = model('Evento', EventoSchema );