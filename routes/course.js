const express = require("express");

const courseRouters = express.Router();

courseRouters.post("/purchase", userMiddleware, async function(req, res) {
  const user = req.user;
  const courseId = req.body.courseId;

  const purchase = await purchaseModel.create({
    userId: user.id,
    courseId: courseId
  });
  res.json({
    message: "purchase your course here!"
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

