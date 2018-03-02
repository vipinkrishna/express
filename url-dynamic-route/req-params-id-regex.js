//npm i -g express

var express = require("express");
var app = express();

app.get("/:id([0-9]{5})", function (req, res) {  //ROUTE HANDLER
    res.send("GET id " + req.params.id);
    console.log(req.params.id);
});


app.listen(3000);


//curl -X GET localhost:3000/12345