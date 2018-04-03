# TwitterTimeline
Twitter Timeline App using Express 4
Step 1.Configuration
In your command line paste "npm install" to download all the dependecies server and client needed.(they both share one "package.json" in the root of app)
Before you start please provide twitter credentials.Insert your credentilas in config.js.Visit http://dev.twitter.com if you dont have your own twitter credentials.
Step 2.Starting App.
Just paste "npm start" to start app.
Server with all routes is located in "/server/index.js".
Client app is located in "/src" directory(bundle.js + react logics).
Styles are located in "/src/styles" directory.
All the styles are wrapped in .js files.
Step 3.Open your browser and go to http://localhost:4006.
There you will find User Input at the top of the page.You have to fill in with twitter nickname(your or your friend,it doesn't matter) and 
then click the "find tweets". You will see all the tweets in the block below.
If you want to check if the app has been deployed to heroku please visit http://powerful-scrubland-16464.herokuapp.com (please use http protocol not https while there were troubles with ssl,so i left http protocol).
Use "npm run build" for starting webpack build.