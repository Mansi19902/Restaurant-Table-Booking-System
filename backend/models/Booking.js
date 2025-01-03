const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    table: { type: Number, required: true }
});

module.exports = mongoose.model('Booking', bookingSchema);
