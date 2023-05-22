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
mongoose.connect('mongodb+srv://riteshbaindara25:Ai9L6V2WquLRNmug@cluster0.stgntt6.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
})

const creatorSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
});

const sec = "Thisisourliitlesecret";
creatorSchema.plugin(encrypt,{secret:sec, encryptedFields:["password"]});
const creator = mongoose.model("creator",creatorSchema);
app.post("/creatorsignup",function(req,res){
const newcreator = new creator({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
});
newcreator.save();
res.write("<h1>ho gya tu signup bhadwe</h1>");
res.send;
});

app.post("/creatorlogin",function(req,res){
    const username = req.body.username;
    const password = req.body.password;
    // console.log(username);
    creator.findOne({username:username}).then(post=>{
        if(post.password===password){
          res.write("<h1>successfully login</h1>");
          res.send;
        }
        else{
            console.log(post.password);
        }
        });
});




app.listen(3000,function(){
    console.log("haa bhai kam  gya");
});
// Ai9L6V2WquLRNmug
