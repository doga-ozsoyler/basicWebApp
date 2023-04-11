const jwt = require("jsonwebtoken");
const User = require("../models/user");
require("dotenv").config();

const verifyToken = async (req, res, next) => {
  try {
    const token = req?.headers?.authorization;
    if (!token)
      return res.json({ success: false, message: "Invalid Authentication" });

    const decoded = jwt.verify(token, `${process.env.JWT_SECRET_KEY}`);
    if (!decoded)
      return res.json({ success: false, message: "Invalid Authentication" });

    const user = await User.findById({ _id: decoded.id }).select("-enterCode");
    if (!user)
      return res.json({ success: false, message: "User doesn't exist" });

    req.user = user;

    next();
  } catch (error) {
    res.json({ success: false, error });
  }
};

module.exports = { verifyToken };
