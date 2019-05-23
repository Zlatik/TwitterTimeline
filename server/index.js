
//dependecies
const express = require("express");
const app = express();
const twitter = require("twitter");
const config = require("../configs/tweeterConfig");
const client = new twitter(config);
const path = require("path");
const parser = require("body-parser");
const passport = require("passport");
const passportConfig = require("../configs/passportConfig");
const sessionConfig = require("../configs/sessionConfig");
const expressSession = require("express-session");
const TwitterStrategy = require("passport-twitter").Strategy;
// const cookieParser = require("cookie-parser");

let profilePhoto;
app.use(parser.json());
app.set('trust proxy', 1);
// app.use(cookieParser);
app.use(parser.urlencoded({extended: true}));


passport.serializeUser(function(user, done) {
    done(null, {username:user.username,userId:user.id,photo:user.photos[0]});
    profilePhoto = user.photos[0];
});

passport.deserializeUser(function(user, done) {

    done(null, user);
});

//pathes to files
const index_path = path.join(__dirname,"../src/index.html");
const public = express.static(path.join(__dirname,"../src"));
//running server
const server = app.listen(process.env.PORT||4006,()=>{
    let host = server.address().address;
    let port = server.address().port;
});

passport.use(new TwitterStrategy(
    {
        consumerKey:passportConfig.consumer_key,
        consumerSecret:passportConfig.consumer_secret,
        callbackURL:passportConfig.callback_url
    },(token, tokenSecret, profile, cb)=>{
    return cb(null, profile);
})
);

app.use(expressSession({
    secret:sessionConfig.secret,
    resave:sessionConfig.resave,
    secure:sessionConfig.secure,
    saveUninitialized:true,
    cookie:{
        secure:false
    }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/public',public);
app.get("/",(req,res)=>{
res.cookie("userPhoto" , profilePhoto);    
res.sendFile(index_path);
console.log(req.cookies)});

//route handler for "/bundle.js"
app.get("/bundle.js",(req,res)=>{
    res.sendFile(path.join(__dirname,"../src/bundle.js"))
})
//route handler for "/bundle.js.map"
app.get("/bundle.js.map",(req,res,next)=>{
   res.sendFile(path.join(__dirname,"../src/bundle.js.map"))
})


//providing cors headers
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials","true")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/login', 
    passport.authenticate('twitter',{session:true})
);

app.get('/oath/callback',
  passport.authenticate('twitter', { successRedirect: '/',
                                     failureRedirect: '/login' }));


//route handler for finding user tweets by Username
app.get("/user/:id/tweets",(req,res)=>{
    var id = req.params.id;
    //use tweeter api to find user tweets timeline
    client.get("/statuses/user_timeline",{screen_name:id})
        .then((tweets)=>{
            res.json(tweets);
        })
        .catch((err)=>{
            throw err;
        })      
});

app.post("/user/tweets",(req,res)=>{
    console.log(req.body);
    client.post("/statuses/update",{status: req.body["text"]})
    .then((tweets)=>{
      console.log(tweets);
    })
    .catch((err)=>{
      throw err;
    })     
})

app.get("/hashtag/:name/tweets",(req,res)=>{
    var name = req.params.name;
   
    client.get("/search/tweets",{q:name,count:50})
    .then((tweets)=>{
        res.json(tweets["statuses"]);
    })
    .catch((err)=>{
        throw err;
    }) 
})

module.exports = server;