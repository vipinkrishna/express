
var express = require("express");
var app = express();

app.set("view engine", "pug");
app.set("views", "./views");

var bodyParser = require("body-parser");  //req.body
app.use(bodyParser.json());  //req.body
app.use(bodyParser.urlencoded({ extended: true }));  //req.body

var router = require("./router");

app.use("/movies", router);

app.get("/", function(req, res){
    res.redirect("/movies/home");
});

app.listen(3000);

