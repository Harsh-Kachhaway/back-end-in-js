var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Canvas' });
});
router.get('/rancir', function(req, res) {
  res.render('rancir');
});
router.get('/gravity', function(req, res) {
  res.render('gravity');
});
router.get('/colision', function(req, res) {
  res.render('colision');
});
router.get('/colisiontwo', function(req, res) {
  res.render('colisiontwo');
});
router.get('/circularmotion', function(req, res) {
  res.render('circularmotion');
});

module.exports = router;
