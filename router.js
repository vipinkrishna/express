//npm i -g express

var express = require("express");
var router = express.Router();

var app = express();

router.get("/get", function (req, res) {
    res.send("Hello GET!");  //curl -X GET "localhost:3000/router/get"
});

router.post("/post", function (req, res) {
    res.send("Hello POST!");  //curl -X POST "localhost:3000/router/post"
});

app.use("/router", router);

app.listen(3000);



