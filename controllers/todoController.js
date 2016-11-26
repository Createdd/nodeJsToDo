/* jshint node: true */
/*jshint esversion: 6 */
module.exports=(app)=>{
  app.get("/", (req,res)=>{
    res.render("todo");
  });
  app.post("/", (req,res)=>{

  });
  app.delete("/", (req,res)=>{

  });
};
