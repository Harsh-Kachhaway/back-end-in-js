var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.cookie("age", 20)
  res.render("index");
});
router.get("/read", function (req, res, next) {
  console.log(req.cookies.age)
  res.send("read");
});
router.get("/delet", function (req, res, next) {
res.clearCookie("age")
  res.send("clear");
});

var figlet = require("figlet");

figlet("Hello World!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});


module.exports = router;
