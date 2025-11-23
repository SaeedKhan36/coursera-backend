const { Router } = require("express");
const { adminModel } = require("../db");

const adminRouters = Router();

adminRouters.post("/signup", function(req,res){
    res.json({
        message : "signup enpoint"
    })
})


adminRouters.post("/signin", function(req,res){
    res.json({
        message : "signin enpoint"
    })
})


adminRouters.post("/course", function(req,res){
    res.json({
        message : "course"
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