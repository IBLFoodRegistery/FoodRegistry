const express = require('express');
//var router = express.Router();
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;

var user = require('../model/user');
const CONNECTION_URL = "mongodb+srv://admin:pass@users-k5b45.mongodb.net/test?retryWrites=true&w=majority"
const DATABASE_NAME = "Users";

var app = express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

var database, collection;

app.listen(3000, function(){
    MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, function(error, client){
        if(error){
            throw error;
        }
        database = client.db(DATABASE_NAME);
        collection = database.collection("people");
        console.log("Connected to " + DATABASE_NAME);
    })
})

app.post("/addUser", (request, response) => {
    collection.insert(request.body, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result.result);
    });
});

app.get("/getUser", (req, res) => {
    collection.find({}).toArray((err, result) =>{
        if(err){
            return res.status(500).send(error);
        }
        res.send(result);
    })
})

app.get("/getUser/:id", (req, res) =>{
    var todoid = req.params.id;
    collection.findOne({_id: todoid}, (err, result) =>{
        if(err){
            return res.status(500).send(error);
        }
        res.send(result);
    })
})


/*
app.get("/", (req, res) =>{
    user.find((err, res) =>{
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Users :' + JSON.stringify(err, undefined, 2)); }
    });
});

app.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No user with given id : ${req.params.id}`);

       // user.findById(req.params.id, (err, doc) => {
        collection.findOne({}, function(err, result){
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving User :' + JSON.stringify(err, undefined, 2)); }
    });
});


// => localhost:3000/user/
app.get('/', (req, res) => {
    user.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Users :' + JSON.stringify(err, undefined, 2)); }
    });
});

app.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No user with given id : ${req.params.id}`);

    Employee.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving User :' + JSON.stringify(err, undefined, 2)); }
    });
});


router.post('/', (req, res) => {
    var emp = new Employee({
        name: req.body.name,
        id: req.body.id,
        //familymembers: req.body.familymembers,
        //foodpackage: req.body.foodpackage,
        //carepackage: req.body.carepackage
    });
    emp.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in User Save :' + JSON.stringify(err, undefined, 2)); }
    });
});
*/