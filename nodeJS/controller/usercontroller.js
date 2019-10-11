const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;


var { User } = require('../model/user');

// => localhost:3000/Users/
router.get('/', (req, res) => {
    User.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving User :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    User.findOne({ _id: req.params.id}).then(doc => {
            if (doc) { res.send(doc); }
            else { console.log(`Error in Retriving User : ${req.params.id}`) }
    });
});

router.post("/addUser", (req, res) => {
    console.log(req.body._id);
    var usr = new User({
        _id: req.body._id,
        userName: req.body.userName,
        role: req.body.role,
        email: req.body.email,
        familyMembers: req.body.familyMembers,
        carePackage: req.body.carePackage,
        foodPackage: req.body.foodPackage,
    });
    usr.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in User Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;

