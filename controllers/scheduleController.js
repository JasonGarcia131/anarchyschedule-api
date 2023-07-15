const Schedule = require('../models/Schedule');

const getSchedule = async (req, res) => {
    // Get schedule document from db
    const schedule = await Schedule.find();
    res.status(200).json(schedule);
}

const postSchedule = async (req, res) => {
    const weeklySchedule = req.body;
    let foundWeeklySchedule = await Schedule.findOne({_id: '64b2d53673a59bbb96998b5c'});
    //Overwrites document instead of creating a new one.
    foundWeeklySchedule.overwrite(weeklySchedule);
    const results = foundWeeklySchedule.save();
    res.json(results);
}

module.exports = {
    getSchedule,
    postSchedule
}