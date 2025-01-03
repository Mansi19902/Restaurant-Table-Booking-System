import React, { useState } from 'react';

const BookingForm = ({ addBooking }) => {
    const [formData, setFormData] = useState({
        name: '',
        date: '',
        time: '',
        table: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addBooking(formData);
        setFormData({ name: '', date: '', time: '', table: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
            <input type="date" name="date" value={formData.date} onChange={handleChange} required />
            <input type="time" name="time" value={formData.time} onChange={handleChange} required />
            <input name="table" placeholder="Table Number" value={formData.table} onChange={handleChange} required />
            <button type="submit">Book</button>
        </form>
    );
};

export default BookingForm;
