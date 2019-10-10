const mongoose = require('mongoose');

var User = mongoose.model('User',  {
    uid: { type: String },
    name: { type: String },
    email: { type: String },
    role: { type: String },
    familyMembers: { type: String},
    foodPackage: { type: String },
    carePackage: { type: String }
})

module.exports = { User };
