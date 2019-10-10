const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:pass@users-k5b45.mongodb.net/Users?retryWrites=true&w=majority', (err) => {
    if (!err)
        console.log('MongoDB connection succeeded.');
    else
        console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;

mongoose.connect