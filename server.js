var mongodb = require("mongodb");
var express = require("express");
//var bodyParser = require("body-parser");
var mongoClient = mongodb.MongoClient;
var app = express();

//app.use(bodyParser.json());

app.use(express.static(__dirname+"/../Mean-Stack1"));
app.use(app.router);

app.get("/", function(req,res){
	res.redirect("/index.html");
})

app.get("/mongodb",function (req,res) {
    mongoClient.connect("mongodb://raghuram:raghuram@ds121222.mlab.com:21222/emp1" , function (err,db) {
        var collection = db.collection("e2");
        collection.find().toArray(function (err, doc) {
            res.send(doc);
        });
    });
});

//var port = process.env.port || 4444;

//app.listen(port);

var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
 });

//app.listen(8080);
console.log("Server Started on Port No.4444");
