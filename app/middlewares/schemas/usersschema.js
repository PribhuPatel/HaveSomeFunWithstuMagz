const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;
var UserSchema = new Schema({
    name: { type: String, default: 'hahaha' },
    email: { type: String, index: true },
    password: { type: String, match: /[a-z]/ },
    date: { type: Date, default: Date.now },
    buff: Buffer
  });


var Users =  mongoose.model('users', UserSchema);
module.exports = {
    Users
}