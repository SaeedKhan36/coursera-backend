const jwt = require("jsonwebtoken");

const SECRET_KEY = "asdasdasd";


function userMiddleware(req, res, next) {
const token = req.header.token;

const decoded = jwt.verify(token, SECRET_KEY);

if (decoded) {
    req.userId= decoded.id
    next()
}
else{
    res.status(403).json({
        message : "invalid"
    })
}
}
module.exports = {
  userMiddleware
};