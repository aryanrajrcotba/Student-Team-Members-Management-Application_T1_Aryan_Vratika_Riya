const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
    name: { type: String, required: true },
    roll: String,
    year: String,
    degree: String,
    project: String,
    hobbies: String,
    certificate: String,
    internship: String,
    aboutYourAim: String,
    image: String 
});

module.exports = mongoose.model('Member', memberSchema);