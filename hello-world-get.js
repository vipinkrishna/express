//npm i -g express

var express = require("express");
var app = express();
app.get("/", function(req, res){
    res.send("Hello World!");
});

app.listen(3000);

//curl -X GET "localhost:3000"  //Hello World!
//OR
//curl "localhost:3000"  //Hello World!