const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Care } = require('../models/care');


// => localhost:7000/foods/
router.get('/', (req, res) => {
    Care.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Cares :' + JSON.stringify(err, undefined, 2)); }
    });
});


router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        Care.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Employee :' + JSON.stringify(err, undefined, 2)); }
    });
})



router.post('/', (req, res) => {
    var care = new Care({
        name: req.body.name,
        quantity: req.body.quantity,
        description: req.body.description,
    });
    care.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Care Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var care = {
        name: req.body.name,
        quantity: req.body.quantity,
        description: req.body.description,
    };
    Care.findByIdAndUpdate(req.params.id, { $set: care }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Food Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Care.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Care Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});


module.exports = router;


