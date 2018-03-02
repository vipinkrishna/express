//npm i -g express

var express = require("express");
var app = express();
app.get("/",function(req, res){
    res.send("Hello!");
});

app.get("/express", function(req, res){
    res.send("Hello Express!");
});

app.listen(3000);


//curl -X GET "localhost:3000"  //Hello!
//OR
//curl "localhost:3000"  //Hello!



//curl -X GET "localhost:3000/express"  //Hello Express!
//OR
//curl "localhost:3000/express"  //Hello Express!