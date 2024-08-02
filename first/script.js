const express = require('express')
const app = express()

let i = 0;

app.set("view engine","ejs");

app.use(express.static('./public'))

app.use(function(req,res,next){
    console.log(i++);
    next();
})
app.get('/', function (req, res) {
  res.render('index',{age:80})
})
app.get('/:age', function (req, res) {
    let ages = `${req.params.age}`
  res.render('index',{age:ages , order:"what", helo:"helllllllllllll no"})
})
app.get('/contact', function (req, res) {
  res.render('contact')
})
app.get('/user', function (req, res) {
  res.render('user')
})

app.listen(3000)