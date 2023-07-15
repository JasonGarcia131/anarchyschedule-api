const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scheduleSchema = new Schema({
    schedule:
        [
            {
                day: String,
                employees: [
                    {
                        name: String,
                        time: String
                    }
                ]
            }
        ],
    createdAt: {
        type: Date,
        default: Date.now()
    }

});

module.exports = mongoose.model('Schedule', scheduleSchema);