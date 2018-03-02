//npm i -g express

var express = require("express");
var app = express();

app.get("/:id1/:id2", function (req, res, next) {  //ROUTE HANDLER
    res.send("GET id1 " + req.params.id1 + ", id2 " + req.params.id2);
    console.log(req.params.id1 + " " + req.params.id2);
    next();
});


app.listen(3000);


//curl -X GET localhost:3000/123/321