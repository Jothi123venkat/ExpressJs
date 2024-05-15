

import express from 'express';


const app = express();


const  port = 5000;

app.get("/",(req,res)=>{
    res.json({name:"hello world",age:"25"});
})

app.listen(port,(()=>{
    console.log(`The port is running ${port}`);

}))