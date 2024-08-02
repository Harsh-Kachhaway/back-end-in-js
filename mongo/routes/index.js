var express = require('express');
var router = express.Router();
const userModel = require('./users')

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});


router.get('/create',async function (req,res) {
  await userModel.create({
    username: "harsh",
    nicname: "goodlike",
    desctiption: "i am 20 and love to code",
    catogries:["life",'game','development'],
  })
  await userModel.create({
    username: "harshit",
    nicname: "goat",
    desctiption: "i am 25 and love to live",
    catogries:["life",'development'],
  })
  await userModel.create({
    username: "harshita",
    nicname: "cutipie",
    desctiption: "i am 20 and love to code",
    catogries:["fassion",'game','food'],
  })
  res.send("hello")
})

router.get("/find",async function (req,res) {
  let user = await userModel.find({catogries: {$all:[ 'development' , 'life']}});
  res.send(user);
})


module.exports = router;
