const express = require("express");
const daterequire = require("./Views/MiddleWare/date.js");

//init express
const app = express();
//middllware
app.get("/",daterequire, (req, res) => {
  res.send("<h1 style={{color:red}}>hello Portofino</h1> <a href='home'>click here to see heaven</a>");
});
//
app.get("/home",daterequire, (req, res) => {
    res.sendFile(__dirname+"/Views/home.html");

  });
  app.get("/contactus",daterequire, (req, res) => {
    res.sendFile(__dirname+"/Views/contactus.html");

  });
  app.get("/ourservice",daterequire,  (req, res) => {
    res.sendFile(__dirname+"/Views/ourservice.html");

  });
  app.get("/styles",daterequire, (req, res) =>{
  res.sendFile (__dirname +"/Views/styles.css")
});



//port
app.listen(5001,err=> {
    if (err) {console.log(err)}
else console.log("server is running on http://localhost:5001")
});
