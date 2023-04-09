const jwt = require("jsonwebtoken");
require("dotenv").config();

const makeToken = (user) => {
  const expirationDate = new Date();
  expirationDate.setHours(new Date().getHours() + 1);
  return jwt.sign({ user }, process.env.JWT_SECRET_KEY, {
    expiresIn: "1d",
  });
};

module.exports = makeToken;
