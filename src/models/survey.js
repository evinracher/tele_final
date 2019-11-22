const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const surveySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    home_address: {
        type: String,
        required: true
    }, email: {
        type: String,
        required: true
    },
    products: [String],
    text: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('survey', surveySchema);
