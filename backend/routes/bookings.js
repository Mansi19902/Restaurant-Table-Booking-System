const express = require('express');
const Booking = require('../models/Booking');
const router = express.Router();

// Get all bookings
router.get('/', async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Add a new booking
router.post('/', async (req, res) => {
    const { name, date, time, table } = req.body;
    const newBooking = new Booking({ name, date, time, table });

    try {
        const savedBooking = await newBooking.save();
        res.status(201).json(savedBooking);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete a booking
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Booking.findByIdAndDelete(id);
        res.json({ message: 'Booking deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
