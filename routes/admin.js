const { Router } = require("express");
const { adminModel } = require("../db");
const { adminMiddleware } = require("../middleware/admin");
const SECRET_KEY1 = "adminsecretkey123";

const adminRouters = Router();

adminRouters.post("/signup",async function(req,res){
const {email,password,firstName,lastName}= req.body

await adminModel.create({
  email:email,
  password:password,
  firstName:firstName,
  lastName:lastName
})

  res.json({
    message: "signup endpoint"
  });
})


adminRouters.post("/signin", async function(req,res){
    const {email, password}= req.body;
    const user = await adminModel.findOne({
        email:email,
        password:password
    })

    if(user){
    const token = jwt.sign({ 
        id: admin._id
    }, SECRET_KEY1)
}
else{
    token:token

}

    
    
    res.json({
        message : "signin enpoint"
    })
})


adminRouters.post("/course", adminMiddleware, async function(req,res){
    const adminId = req.adminId;
    const {title,description,price}= req.body;  
    const course = await courseModel.create({
        title:title,
        description:description,
        imgUrl:imgUrl,
        creatorID:adminId
    })

    res.json({
        message : "course",
        courseId : course._id
    })
})


adminRouters.put("/course", function(req,res){
    res.json({
        message : "signup enpoint"
    })
})


adminRouters.get("/course/bulk", function(req,res){
    res.json({
        message : "show courses in bulk"
    })
})

module.exports = {
    adminRouters: adminRouters
}