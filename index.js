const express = require("express");
const app = express();
const twitter = require("twitter");
const config = require("./config");
const client = new twitter(config);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/user/:id/tweets',(req,res)=>{
    var id = req.params.id;
    client.get("/statuses/user_timeline",{screen_name:id})
        .then((tweets)=>{
            res.json(tweets);
        })
        .catch((err)=>{
            throw err;
        })      
})


app.listen(process.env.PORT||4006);