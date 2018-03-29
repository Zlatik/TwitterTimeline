const express = require("express");
const app = express();
const twitter = require("twitter");
const config = require("./config");
const client = new twitter(config);

app.get('/user/:id/:count',(req,res)=>{
    var id = req.params.id;
    var count = req.params.count;
    client.get("/statuses/user_timeline",{screen_name:id,count:count})
        .then((tweets)=>{
            res.json(tweets);
        })
        .catch((err)=>{
            throw err;
        })      
})


app.listen(process.env.PORT||4006);