/* jshint node: true */
/*jshint esversion: 6 */
var bodyParser=require("body-parser");
var mongoose=require("mongoose");
var urlencodedParser=bodyParser.urlencoded({extended:false});
var data =[{item:"Javascript"}, {item:"node.js"}, {item:"react.js"}];

mongoose.connect("mongodb://test:test@ds147537.mlab.com:47537/todo", ()=>{
  console.log("Connecting to MongoDB was successful!");
});//connect to DB
var todoSchema= new mongoose.Schema({
  item: String
});//create a schema(a blueprint) for what the DB can expect with our data
var Todo=mongoose.model("Todo", todoSchema);//allows to create new todos and push them to the DB
var itemOne=Todo({item:"fighting"}).save((err)=>{
  if(err) throw err;
  console.log("item saved");
});//create a testing item 


module.exports=(app)=>{
  app.get("/", (req,res)=>{
    res.render("todo", {todos: data});
  });
  app.post("/",urlencodedParser,(req,res)=>{
    data.push(req.body);
    res.json(data);
  });
  app.delete("/:item", (req,res)=>{
    data=data.filter((todo)=>{
      return todo.item.replace(/ /g, "-") !== req.params.item;//if true the item remains in the array
    });
    res.json(data);
  });
};
