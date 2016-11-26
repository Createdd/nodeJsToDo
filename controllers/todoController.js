/* jshint node: true */
/*jshint esversion: 6 */
var bodyParser=require("body-parser");
var urlencodedParser=bodyParser.urlencoded({extended:false});
var data =[{item:"Javascript"}, {item:"node.js"}, {item:"react.js"}];

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
