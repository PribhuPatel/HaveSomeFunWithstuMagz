const express = require('express');
const ejs = require('ejs');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
//const passport  = require('passport');
const {connectMongoDb} = require('./app/middlewares/mongodb');
app.set('views', './views') // specify the views directory
app.set('view engine', 'ejs') // register the template engine
var {verifyToken} = require('./app/middlewares/verifytoken');
//require('./app/utils/passport');

// app.use(require('express-session')({
//     secret: 'keyboard cat',
//     resave: false,
//     saveUninitialized: false
// }));
app.use(connectMongoDb);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(passport.initialize());
//app.use(passport.session());
//app.use(require('flash')());
//app.use(ejs);
// app.get('/',(req,res)=>{
//     res.render("index");
// });
app.use(express.static('./public'));
app.use('/',require('./app/router/index'));
app.use('/auth',require('./app/controllers/auth'));


app.listen(5000,()=>{
    console.log("server started");
});