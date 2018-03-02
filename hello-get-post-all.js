//npm i -g express

var express = require("express");
var app = express();

app.get("/", function (req, res) {
    res.send("Hello get!");  //GET
});

app.post("/", function (req, res) {
    res.send("Hello post!");  //POST
});

app.all("/", function (req, res) {
    res.send("Hello all!");  //PUT, DELETE, POST, GET
});

app.listen(3000);

//curl -X GET "localhost:3000"  //Hello World!
//OR
//curl "localhost:3000"  //Hello World!

//curl -X GET/POST/PUT/DELETE "localhost:3000"