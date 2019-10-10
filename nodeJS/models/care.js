const mongoose = require('mongoose');

var Care = mongoose.model('Care', {
    name: { type: String },
    quantity: { type: Number },
    description: { type: String }

});

module.exports = { Care };