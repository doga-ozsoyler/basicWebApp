const express = require("express");
const expressHandler = require("express-async-handler");
const User = require("../models/user");
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

module.exports = testUserRoutes;
