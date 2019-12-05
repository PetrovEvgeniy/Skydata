const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, ObjectId } = Schema.Types;

const aircraftSchema = new Schema({

    name: {
        type: String,
        required: true
    },
<<<<<<< HEAD
    imageURL: {
        type: String,
        required: true
    },
=======
>>>>>>> 94b2df7268182a7eabfce2b7d874906718c2a510
    type: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    countryOfOrigin: {
        type: String,
        required: true
    },
    topSpeed: {
        type: Number,
        required: true
    },
    range: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },

    creator: { type: ObjectId, ref: "User" }

});

module.exports = new Model('Aircraft', aircraftSchema);