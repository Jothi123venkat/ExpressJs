const express = require("express");

const app = express();

const path = require("path");
const port = 5000;

app.get("/", (req, res) => {
  //    res.sendStatus(500);
  // res.status(500).send("hi")
//   res.json({ message: "hi" });
//    res.download("Server.js")
res.sendFile(path.join(__dirname,"index.html"),{message:"hi"})
});

app.listen(port, () => {
  console.log(`The port is running on localhost:${port}`);
});
