const express = require("express");

const courseRouters = express.Router();

courseRouters.post("/purchase", function(req, res) {
  res.json({
    message: "purchase your course here!"
  });
});

courseRouters.get("/bulk", function(req, res) {
  res.json({
    message: "course viewer"
  });
});

module.exports = {
  courseRouters: courseRouters
};

