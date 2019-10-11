const mongoose = require('mongoose');

var User = mongoose.model('User',  {
    _id: { type: String },
    userName: { type: String },
    role: { type: String },
    email: { type: String },
    familyMembers: { type: String},
    carePackage: { type: String },
    foodPackage: { type: String },
})

module.exports = { User };



