const mongoose = require('mongoose');

var Food = mongoose.model('Food', {
    name: { type: String },
    quantity: { type: Number },
    description: { type: String }

});

module.exports = { Food };