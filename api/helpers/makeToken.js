const jwt = require("jsonwebtoken");
require("dotenv").config();

const makeToken = (userID) => {
  const expirationDate = new Date();
  expirationDate.setHours(new Date().getHours() + 1);
  return jwt.sign({ _id: userID }, process.env.JWT_SECRET_KEY, {
    expiresIn: "1d",
  });
};

module.exports = makeToken;
