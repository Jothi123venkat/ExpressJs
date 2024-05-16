




const express =  require("express")
const path = require("path")

const app = express();


const  port = 5000;


app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"))
})


 app.get("/vijay",(req,res)=>{
    res.sendFile(path.join(__dirname,"vijay.html"))

 })
app.listen(port,(()=>{
    console.log(`The port is running ${port}`);

})) 