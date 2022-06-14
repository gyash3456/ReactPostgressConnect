const express = require("express");
const {pool} = require('./dbConfig');
const app = express();
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
app.get("/get", (req,res)=>{
    console.log("connected to react");
    pool.query('select * from users',(err,result)=>{
      if(err){
        console.log(err);
        throw err;
      }
      res.send(result);
    })
    
});
app.post("/post", (req,res)=>{
  console.log("connected to react");
  pool.query('select * from users',(err,result)=>{
    if(err){
      console.log(err);
      throw err;
    }
    res.send(result);
  })
  
});
const PORT = process.env.PORT |8080;
app.listen(PORT,console.log(`Server has started on port ${PORT}`));