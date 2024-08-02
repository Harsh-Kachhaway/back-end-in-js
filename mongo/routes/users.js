const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/testingtwo");

const userschema = mongoose.Schema({
  username: String,
  nicname: String,
  desctiption: String,
  catogries:{
    type: Array,
    default: []
  },
  datecreated:{
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model("user",userschema);