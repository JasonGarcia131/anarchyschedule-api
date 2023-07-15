const express = require('express');
const router = express.Router();
const scheduleController = require('../controllers/scheduleController');

router.route('/')
    .get(scheduleController.getSchedule);

router.route('/admin/setschedule')
    .put(scheduleController.postSchedule);

module.exports = router;