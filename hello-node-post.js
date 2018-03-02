//npm i -g express

var express = require("express");
var app = express();
app.post("/",function(req, res){
    res.send("Hello!");
});

app.post("/node", function(req, res){
    res.send("Hello Node!");
});

app.listen(3000);


//curl -X POST "localhost:3000"  //Hello!

//curl -X POST "localhost:3000/node"  //Hello Node!