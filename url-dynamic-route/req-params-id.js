//npm i -g express

var express = require("express");
var app = express();

app.get("/:id", function (req, res, next) {  //ROUTE HANDLER
    res.send("GET:id: " + req.params.id);
    console.log(req.params.id);
    next();
});


app.listen(3000);


//curl -X GET localhost:3000/123