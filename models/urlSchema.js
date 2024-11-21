const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    id: Number,
    url: String,
    shortCode: String,
    cnt: Number,
    createdAt: Date,
    updatedAt: Date
});

module.exports = mongoose.model('urls', urlSchema);