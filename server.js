var mongodb = require("mongodb");
var express = require("express");
var mongoClient = mongodb.MongoClient;
var app = express();

app.get("/mongodb",function (req,res) {
    mongoClient.connect("mongodb://raghuram:raghuram@ds121222.mlab.com:21222/emp1" , function (err,db) {
        var collection = db.collection("e2");
        collection.find().toArray(function (err, doc) {
            res.send(doc);
        });
    });
});

var port = process.env.port || 4444;

app.listen(port);

//app.listen(8080);
console.log("Server Started on Port No.4444");
