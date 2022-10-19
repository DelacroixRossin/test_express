const express = require("express");
const app = express();
const port = 3001;

app.get("/",  (req, res) =>{
  res.sendFile(__dirname + "/Views/home.html");
});
app.get("/about",  (req, res) =>{
  res.sendFile(__dirname + "/Views/about.html");
});
app.get("/contact",  (req, res) =>{
  res.sendFile(__dirname + "/Views/contact.html");
});

app.get("/service",  (req, res) =>{
  res.sendFile(__dirname + "/Views/service.html");
});



app.listen(port,  () =>{
  console.log(`Test app listening on port ${port}!`);
});