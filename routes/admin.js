const { Router } = require("express");
const { adminModel,courseModel } = require("../db");
const { adminMiddleware } = require("../middleware/admin");
const SECRET_KEY1 = process.env.SECRET_KEY1;

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
    res.json({
        token : token
    })
}
else{
res.status(401).json({
    message : "Invalid credentials"
})
}
})


adminRouters.post("/course", adminMiddleware, async function(req,res){
 const adminId = req.userId;
    const {title,description,price,imgUrl}= req.body;

    const course = await courseModel.create({
        title:title,
        description:description,
        imgUrl:imgUrl,
        price:price,
        creatorID:adminId
    })

    res.json({
        message : "course",
        courseId : course._id
    })
})


adminRouters.put("/course", async function(req,res){
    const adminId = req.userId;
    const {courseId,title,description,price,imgUrl}= req.body;

    const course = await courseModel.updateOne({
        _id : courseId,
        creatorID : adminId
    },
    {
        title:title,
        description:description,
        price:price,
        imgUrl:imgUrl
    })
       res.json({
        message : "course updated",
        courseId: course._id

    })
})


adminRouters.get("/course/bulk", async function(req,res){
    const adminId = req.userId;
    const courses = await courseModel.find({
        creatorID : adminId
    })
    res.json({
         courses
    })
})

module.exports = {
    adminRouters: adminRouters
}