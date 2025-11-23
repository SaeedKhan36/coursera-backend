// routes/user.js
const express = require("express");

const userRouters = express.Router();
const { userModel } = require("../db");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "asdasdasd";


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
  const user = await userModel.find({
    email:email,
    password:password
  })
  if (user){
    jwt.sign({
      id:user._id
    }, SECRET_KEY)
    
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

userRouters.get("/purchase", function (req, res) {
  res.json({
    message: "purchase endpoint"
  });
});

module.exports = {
  userRouters
};
