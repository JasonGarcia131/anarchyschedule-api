const mongoose = require('mongoose');
require('dotenv').config();

const db = async () => {
    try {
        await mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.DATABASE_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
    } catch (err) {
        console.error(err);
    }
}

module.exports = db