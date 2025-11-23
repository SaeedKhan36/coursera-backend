const jwt = require("jsonwebtoken");

const SECRET_KEY1 = "adminsecretkey123";

function adminMiddleware(req, res, next) {
  const token = req.header.token;
  const decoded = jwt.verify(token, SECRET_KEY1);

  if (decoded) {
      req.adminId= decoded.id
      next()
  }
  else{
      res.status(403).json({
          message : "invalid"
      })
  }
}

module.exports = {
  adminMiddleware
};