import React, { useState, useEffect } from 'react';
import axios from "axios";
import BookingForm from './components/BookingForm';
import TableLayout from './components/TableLayout';
import BookingSummary from './components/BookingSummary';

const App = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/bookings')
            .then((response) => setBookings(response.data));
    }, []);

    const addBooking = (booking) => {
        axios.post('http://localhost:5000/api/bookings', booking)
            .then((response) => setBookings([...bookings, response.data]));
    };

    const deleteBooking = (id) => {
        axios.delete(`http://localhost:5000/api/bookings/${id}`)
            .then(() => setBookings(bookings.filter((b) => b._id !== id)));
    };

    return (
        <div>
            <h1>Restaurant Table Booking System</h1>
            <BookingForm addBooking={addBooking} />
            <TableLayout bookings={bookings} />
            <BookingSummary bookings={bookings} deleteBooking={deleteBooking} />
        </div>
    );
};

export default App;
