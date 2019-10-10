const mongoose = require('mongoose');

var User = mongoose.model('User',  {
    uid: { type: String },
    name: { type: String },
    email: { type: String },
    role: { type: String }
})

module.exports = { User };