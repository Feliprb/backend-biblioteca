const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    rol: { type: String, required: true },
    name: { type: String, required: true },

}, { versionKey: false });

module.exports = mongoose.model('User', userSchema);