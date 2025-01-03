const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const bookingRoutes = require('./routes/bookings');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/bookings', bookingRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URL,{useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error(err));

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
