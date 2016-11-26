/* jshint node: true */
/*jshint esversion: 6 */
var express=require("express");
var app=express();
var port=process.env.PORT||3000;
var todoController=require("./controllers/todoController");
app.set("view engine", "ejs");//set the view engine to ejs
app.use(express.static("./public"));//serve static content for the app from the public directory. ie when entering a url, it looks inside the public folder
app.listen(port, ()=>{
  console.log("Listening on Port: "+port);
});//listen to port
todoController(app);//execute the controller file and pass the argument app
