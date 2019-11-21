const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const surveySchema = new Schema({
    name: String,
    age: String,
    city: String,
    home_address: String,
    email: String,
    products: [String],
    text: String
});

module.exports = mongoose.model('survey', surveySchema);
