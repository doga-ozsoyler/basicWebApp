const expressHandler = require("express-async-handler");
const User = require("../models/user");

const createUserController = expressHandler(async (req, res) => {
  try {
    const userExists = await User.findOne({ email: req?.body?.email });

    if (userExists) {
      return res
        .status(404)
        .json({ success: false, message: "User already exist" });
    }

    await User.create({
      email: req?.body?.email,
      status: req?.body?.status,
    });

    res.status(201).json({ success: true, message: "Signup Success!" });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
});

module.exports = {
  createUserController,
};
