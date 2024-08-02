const express = require('express')
const app = express()


app.set("view engine","ejs");
app.use(express.static('./public'));

app.use(function(req,res,next){
    console.log("midle");
    next()
})

app.get('/index', function (req, res) {
  res.render('index',{name:"harsh"})
})

app.listen(3000)