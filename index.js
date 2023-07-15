require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./config/db');
const cors = require('cors');
const corsOptions = require('./config/corsOption');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5001;

// Connects to database;
db();

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

// Parses the body requests
app.use(express.json());

// Routes
app.use('/schedule', require('./routes/schedule'));

// Catch all 
app.all('*', (req, res) => {
    res.status(404);
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'));
    } else if (req.accepts('json')) {
        res.json({ "error": "404 Not Found" });
    } else {
        res.type('txt').send("404 Not Found");
    }
});

// Opens a connection to the database
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});