const express = require("express");

const router = express.Router();

router.get("/",(req,res)=>{
    res.send("user list")
    
})


 router.post("/",(req,res)=>{
     console.log("create User");
 })

router.get("/new",(req,res)=>{
  res.send("new users")

})

// importanr routing

router.route("/:userID")
    .get((req, res) => {
        const id = req.params.userID;
        console.log(user);
        res.send(`Get user ${id} ${actors[id]}`);
    })
    .put((req, res) => {
        const id = req.params.userID;
        res.send(`Update user ${id}`);
    })
    .delete((req, res) => {
        const id = req.params.userID;
        res.send(`Delete user ${id}`);
    });




// useID gura name la edhavathu params vanthuchu naa intha router.param function work aagum

 const actors =[{name:"vijay"},{name:"ajith"}]

router.param("userID",(req,res,next,userID)=>{
    user = actors[userID]
    console.log(userID);
    next()

})    

    
// router.get("/:userID",(req,res)=>{
//      const id = req.params.userID;
//      res.send(`Get users ${id}`)
// })

// // put means Update
// router.put("/:userID",(req,res)=>{
//      const id =  req.params.userID;
//      res.send(` Update users ${id}`)
// })


// router.delete("/:userID",(req,res)=>{
//     const id =  req.params.userID;
//     res.send(` Update users ${id}`)
// })

module.exports = router;
