var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/1', function(req, res) {
  req.flash("age",13)
  res.send("1")
});

router.get('/2', function(req, res) {
  req.flash("age", 17);
  res.send("2")
});
router.get('/3', function(req, res) {
  console.log(req.flash("age"));
  res.send("3")
});

module.exports = router;
