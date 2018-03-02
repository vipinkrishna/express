//npm i -g express

var express = require("express");
var app = express();

app.use(function (req, res, next) {
    console.log("New request received at " + Date.now());
    next();
});

app.listen(3000);


//curl -X GET "localhost:3000"