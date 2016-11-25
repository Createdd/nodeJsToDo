/* jshint node: true */
/*jshint esversion: 6 */
module.exports=(app)=>{
  app.get("/todo", (req,res)=>{
    res.send("test");
  });
  app.post("/todo", (req,res)=>{

  });
  app.delete("/todo", (req,res)=>{

  });
};
