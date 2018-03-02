//npm i -g express
//npm i -g mongoose


var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json());  //PARSES POST REQUEST BODY
app.use(bodyParser.urlencoded({ extended: true }));  //PARSES POST REQUEST BODY

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/node");
var personSchema = mongoose.Schema({ name: String, age: Number, nationality: String });
var Person = mongoose.model("", personSchema, "raja")

app.set("view engine", "pug");
app.set("views", "./views");

//=================================================================================================
app.get("/create", function (req, res) {
    res.render("person");  //person.pug
});

app.post("/create", function (req, res) {
    var personInfo = req.body;  //POST REQUEST BODY 
    if (!personInfo.name || !personInfo.age || !personInfo.nationality) {
        res.render("show_message", { message: "INPUT IS INCOMPLETE!", type: "error" });
    }
    else {
        // res.send("VALID");
        console.log(personInfo);
        var newPerson = new Person({
            name: personInfo.name,
            age: personInfo.age,
            nationality: personInfo.nationality
        });  //NEW PERSON

        newPerson.save(function (err, result) {
            if (err) {
                res.render("show_message", { message: "DATABASE ERROR!", type: "error" });
                console.log(err);
            }
            else {
                res.render("show_message", { message: "NEW PERSON ADDED!", type: "success", person: personInfo });
                console.log("");
                console.log(result);
            }
        });
    }
});

//=================================================================================================

app.get("/read", function (req, res) {
    Person.find(function (err, response) {
        console.log(response);
        // res.send(response);
        res.json(response);
    });
});
//=================================================================================================
app.get("/update/:oldname/:newname", function (req, res) {
    Person.updateMany({ name: req.params.oldname }, { name: req.params.newname }, function (err, response) {
        if (err) res.render("show_message", { message: "ERROR IN UPDATION!", type: "error" });
        else {
            console.log(response);
            if (response.nModified === 0) res.render("show_message", { message: "NOTHING UPDATED!", type: "error" });
            else res.render("show_message", { message: response.nModified + " DOCUMENTS UPDATED!", type: "ok" });
        }
    });
});
//=================================================================================================
app.get("/delete/:name", function (req, res) {
    Person.remove({ name: req.params.name }, function (err, response) {
        if (err) res.render("show_message", { message: "ERROR IN DELETION", type: "error" });
        else {
            console.log(response.n);
            res.render("show_message", { message: response.n + " DOCUMENTS DELETED!", type: "ok" });
        }
    });
});

//=================================================================================================
app.get("*", function (req, res) {
    res.send("Invalid Request!");
});

app.listen(3000);