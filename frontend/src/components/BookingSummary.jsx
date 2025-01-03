import React from 'react';

const BookingSummary = ({ bookings, deleteBooking }) => {
    return (
        <div>
            <h3>Booking Summary</h3>
            <ul>
                {bookings.map((booking) => (
                    <li key={booking._id}>
                        {booking.name} - Table {booking.table} on {booking.date} at {booking.time}
                        <button onClick={() => deleteBooking(booking._id)}>Cancel</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookingSummary;
