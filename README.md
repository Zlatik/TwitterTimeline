# TwitterTimeline
Twitter Timeline App using Express 4
Step 1.Configuration
In your command line paste "npm install" to download all the dependecies server and client needed.(they both share one "package.json" in the root of app)
Before you start please provide twitter credentials.Insert your credentilas in config.js.Visit http://dev.twitter.com if you dont have your own twitter credentials.
Step 2.Starting Server and Client
You have to open 2 command lines. In the first please paste "npm start" to start your client application.(Webpack is starting there)
In the second paste "node index.js" script,which is starting Node Server.
Server is located in "index.js" in the root of the directory.
Client app is located in "/src" directory.
Step 3.Open your browser and go to http://localhost:8080.
There you will find User Input at the top of the page.You have to fill in with twitter nickname(your or your friend,it doesn't matter) and 
then click the "find tweets". You will see all the tweets in the block below.
