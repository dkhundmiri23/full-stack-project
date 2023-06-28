const mongoose = require('mongoose');

const technologySchema = new mongoose.Schema({
    name: String,
    description: String
});

module.exports = mongoose.model('Technology', technologySchema);
