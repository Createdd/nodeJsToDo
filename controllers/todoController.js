/* jshint node: true */
/*jshint esversion: 6 */
var bodyParser=require("body-parser");
var mongoose=require("mongoose");
var urlencodedParser=bodyParser.urlencoded({extended:false});
//var data =[{item:"Javascript"}, {item:"node.js"}, {item:"react.js"}];

mongoose.connect("mongodb://test:test@ds147537.mlab.com:47537/todo", ()=>{
  console.log("Connecting to MongoDB was successful!");
});//connect to DB
var todoSchema= new mongoose.Schema({
  item: String
});//create a schema(a blueprint) for what the DB can expect with our data
var Todo=mongoose.model("Todo", todoSchema);//allows to create new todos and push them to the DB

module.exports=(app)=>{
  app.get("/", (req,res)=>{
    Todo.find({},(err,data)=>{
      if(err) throw err;
      res.render("todo", {todos: data});
    });//get data from mongodb and pass it to view
  });
  app.post("/",urlencodedParser,(req,res)=>{
    var newTodo=Todo(req.body).save((err,data)=>{
      if(err) throw err;
      res.json(data);
    });//get data from the view and add it to mongoDB
  });
  app.delete("/:item", (req,res)=>{
    Todo.find({item:req.params.item.replace(/\-/g, " ")}).remove((err,data)=>{
      if(err) throw err;
      res.json(data);
    });//delete requested item from mongoDB
  });
};
