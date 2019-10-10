const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;


var { User } = require('../model/user');

// => localhost:3000/Users/
router.get('/', (req, res) => {
    Employee.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Employees :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Employee.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Employee :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post("/addUser", (req, res) => {
    var usr = new User({
        uid: req.body.uid,
        name: req.body.userName,
        email: req.body.email,
        role: req.body.role,
        familyMembers: req.body.familyMembers,
        foodPackage: req.body.foodPackage,
        carePackage: req.body.carePackage,
    });
    usr.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in User Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;

