const mongoose = require('mongoose');
const NoteSchema = new mongoose.Schema({
    name: String,
    type: String,
    price: Number,
    image: String
})
module.exports = mongoose.model('Note', NoteSchema)