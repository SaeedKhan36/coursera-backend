// routes/user.js
const express = require("express");

const userRouters = express.Router();
const { userModel } = require("../db");

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
