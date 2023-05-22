const express  = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const _ = require("lodash");
const encrypt = require("mongoose-encryption");
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",function(req,res){
res.sendFile(__dirname + "/main.html");
});
app.get("/logincreator",function(req,res){
res.sendFile(__dirname+ "/Login-creator.html");
});
app.get("/logincompany",function(req,res){
res.sendFile(__dirname + "/Login-creator.html");
});

app.listen(3000,function(){
    console.log("haa bhai kam  gya");
});