const router = require('express').Router();


router.post('/local',require('./local').local);

//router.post('/signup', require('./signup').signup);

module.exports = router;