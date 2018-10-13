const router = require('express').Router();

//router.post('/local',require('./local').local);
router.post('/local',require('./local').local);
router.post('/google',require('./google').google);
//router.post('/signup', require('./signup'));

module.exports = router;