const { Schema, model } = require('mongoose');


const UsuarioSchema = Schema({
    name: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default: 'assets/img/avatar.png'
    },
    created: {
        type: Date
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
    },
    lat: {
        type: Number,
    },
    lng: {
        type: Number,
    },
    age: {
        type: Number,
    },
    uso: {
        type: Number,
    },
    active: {
        type: Boolean,
    },
    roles: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Role',
        }
    ]
});

UsuarioSchema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

UsuarioSchema.pre('save', function( next ) {
    this.created = new Date();
    next();
});

module.exports = model('Usuario', UsuarioSchema );