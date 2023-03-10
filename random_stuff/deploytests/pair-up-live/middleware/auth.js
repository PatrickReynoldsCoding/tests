const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  // Get json web token from header
  const token = req.header("x-auth-token");

  if (!token) {
    return res
      .status(401)
      .json({ msg: "No token, authorisation has been denied." });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, "secretWebToken");

    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid." });
  }
};
