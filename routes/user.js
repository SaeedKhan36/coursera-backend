// routes/user.js
const express = require("express");

const userRouters = express.Router();
const { userModel , purchaseModel} = require("../db");
const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY;


userRouters.post("/signup", async function (req, res) {
const {email,password,firstName,lastName}= req.body
await userModel.create({
  email:email,
  password:password,
  firstName:firstName,
  lastName:lastName
})

  res.json({
    message: "signup endpoint"
  });
});

userRouters.post("/signin",  async function (req, res) {
  const {email,password}= req.body
  const user = await userModel.findOne({
    email:email,

    password:password
  })
  if (user){
    const token = jwt.sign({
      id:user._id
    }, SECRET_KEY)
    res.json({
      token:token

    })
    

  }
  else{
    res.status(401).json({
      message: "Invalid credentials"
    });
  }


  res.json({
    message: "signin endpoint"
  });
});

userRouters.get("/purchase", async function (req, res) {
  const userId = req.userId;

  const purchases = await purchaseModel.findAll({
    userId,
  });
  res.json({
    message: "purchase endpoint"
  });
  let purchaseids = [];
  for (i=0;i<purchases.length;i++){
    purchaseids.push(purchases[i].courseId)
  }
  const coursesData = await courseModel.find({
    _id: { $in: purchaseCourseids }
});
res.json({
  coursesData,
  purchases
});
});
module.exports = {
  userRouters
};
