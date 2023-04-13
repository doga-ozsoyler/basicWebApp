const express = require("express");
const expressHandler = require("express-async-handler");
const User = require("../models/user");
const EnterCode = require("../models/enterCode");
const makeToken = require("../helpers/makeToken");

const testUserRoutes = express.Router();

testUserRoutes.post(
  "/makeToken",
  expressHandler(async (req, res) => {
    const user = await User.create({ email: req?.body?.email });
    const token = makeToken(user._id);

    res.status(201).json({ success: true, message: "Signin Success!", token });
  })
);

testUserRoutes.get(
  "/getEnterCode",
  expressHandler(async (req, res) => {
    const user = await User.findOne({ email: req?.body?.email });
    const enterCode = await EnterCode.findById(user.enterCode);

    res
      .status(201)
      .json({
        success: true,
        message: "Code is successfully returned!",
        enterCode,
      });
  })
);

module.exports = testUserRoutes;
