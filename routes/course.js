const express = require("express");
const { userMiddleware } = require("../middleware/user");


const courseRouters = express.Router();

courseRouters.post("/purchase", userMiddleware, async function(req, res) {
  const user = req.user;
  const courseId = req.body.courseId;

  const purchase = await purchaseModel.create({
    userId: user.id,
    courseId: courseId
  });
  res.json({
   purchase
  });
});

courseRouters.get("/bulk", async function(req, res) {
  const courses = await courseModel.findAll();
  res.json({
    data: courses
  });
});


module.exports = {
  courseRouters: courseRouters
};

