const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Food } = require('../models/food');


// => localhost:7000/foods/
router.get('/', (req, res) => {
    Food.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Foods :' + JSON.stringify(err, undefined, 2)); }
    });
});


router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Food.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Employee :' + JSON.stringify(err, undefined, 2)); }
    });
})



router.post('/', (req, res) => {
    var food = new Food({
        name: req.body.name,
        quantity: req.body.quantity,
        description: req.body.description,
    });
    food.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Food Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var food = {
        name: req.body.name,
        quantity: req.body.quantity,
        description: req.body.description,
    };
    Food.findByIdAndUpdate(req.params.id, { $set: food }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Food Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Food.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Food Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});


module.exports = router;


