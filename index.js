const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("l'app écoute au port 3000");
  const now = new Date();
  const heure = ("0" + now.getHours()).slice(-2);
  const minute = ("0" + now.getMinutes()).slice(-2);
  res.send("Bonjour, il est " + heure + "h" + minute);
});

app.listen(3000, function () {
        console.log("Test app listening on port 3000")
    });
