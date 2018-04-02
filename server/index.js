//dependecies
const express = require("express");
const app = express();
const twitter = require("twitter");
const config = require("../config");
const client = new twitter(config);
const path = require("path");

//pathes to files
const index_path = path.join(__dirname,"../src/index.html");
const publicPath = express.static(path.join(__dirname,'../src'));
//running server
app.listen(process.env.PORT||4006);

app.use('/public',publicPath);
app.get("/",(req,res)=>{res.sendFile(index_path)});
//route handler for "/bundle.js"
app.get("/bundle.js",(req,res)=>{
    res.sendFile(path.join(__dirname,"../src/bundle.js"))
})
//route handler for "/bundle.js.map"
app.get("/bundle.js.map",(req,res)=>{
    res.sendFile(path.join(__dirname,"../src/bundle.js.map"))
})
//providing cors headers
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
//route handler for finding user tweets by Username
app.get('/user/:id/tweets',(req,res)=>{
    var id = req.params.id;
    //use tweeter api to find user tweets timeline
    client.get("/statuses/user_timeline",{screen_name:id})
        .then((tweets)=>{
            res.json(tweets);
        })
        .catch((err)=>{
            throw err;
        })      
})
