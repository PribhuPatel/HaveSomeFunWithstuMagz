const router = require('express').Router();


router.use('/login',require('./login'));

router.use('/signup', require('./signup'));

router.get('/logout', function(req,res,next){
     res.clearCookie('accesstoken');
  res.redirect('/');
});

module.exports = router;