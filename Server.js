const express = require("express");

const app = express();

const path = require("path");
const port = 5000;
app.use(logger)

// another middleware
//  in the route put
// http://localhost:5000/Hello.html
// to directly access
app.use(express.static("public"))

app.get("/", logger,(req, res) => {
  //    res.sendStatus(500);
  // res.status(500).send("hi")
//   res.json({ message: "hi" });
//    res.download("Server.js")

res.sendFile(path.join(__dirname,"index.html"),{message:"hi"})
});


 const userRouter =  require("./routes/users");
//  use function is  used to take a paticulat path

app.use("/users",userRouter)


// this is called middleware

function logger(req,res,next){
    console.log(req.originalUrl);
    next();
}


app.listen(port, () => {
  console.log(`The port is running on localhost:${port}`);
});
