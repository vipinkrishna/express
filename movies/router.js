
var express = require("express");
var router = express.Router();

var movies = [];
//===========================================================================================
router.get("/home", function (req, res) {
    res.render("home");
});
router.get("/create", function (req, res) {
    res.render("create");
});
router.post("/create", function (req, res) {
    var find = movies.filter(movie => (movie.id == req.body.id)).shift();
    if (find) {
        res.render("create", { message: "MOVIE ALREADY EXISTS! CREATE NEW!", type: "error" });
    } else {
        movies.push(req.body);
        res.render("create", { message: "MOVIE ADDED!", type: "info" });
    }
    console.log(movies);
});
//===========================================================================================
router.get("/read", function (req, res) {
    res.render("read", { movies });
});
//===========================================================================================
router.get("/update", function (req, res) {
    res.render("update");
});
router.post("/update", function (req, res) {
    var index = movies.map(movie => movie.id).indexOf(req.body.id);
    if (index == -1) {
        res.render("update", { message: "NOT FOUND!", type: "error" });
    } else {
        movies[index] = req.body;
        res.render("update", { message: "UPDATED!", type: "info" });
    }
});
//===========================================================================================
router.get("/delete", function (req, res) {
    res.render("delete", { movies });
});
router.get("/delete/:id", function (req, res) {
    var index = movies.map(movie => movie.id).indexOf(req.params.id);
    movies.splice(index, 1);
    res.render("delete", { movies });
});
//===========================================================================================


module.exports = router;
