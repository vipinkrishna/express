//npm i -g express
//npm i -g body-parser
//npm i -g multer

var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var multer = require("multer");
var upload = multer();
app.use(upload.array());

app.use(express.static("public"));

app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", function (req, res) {
    console.log("GET REQUEST");
    res.render("form");
    console.log("FORM SENT");
});

app.post("/", function (req, res) {
    console.log("POST REQUEST");
    console.log(req.body);  //REQUEST BODY
    res.send("POST REQUEST RECEIVED!");
});

app.listen(3000);

