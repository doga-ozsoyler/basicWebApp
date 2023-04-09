const expressHandler = require("express-async-handler");
const User = require("../models/user");
const sendEmail = require("../helpers/sendEmail");

const createUserController = expressHandler(async (req, res) => {
  try {
    const { email } = req?.body;

    const userExists = await User.findOne({ email: email });

    if (userExists) {
      return res
        .status(404)
        .json({ success: false, message: "User already exist" });
    }

    await User.create({
      email: email,
      status: req?.body?.status,
    });

    await sendEmail(
      "Invitation to StromaWebApp",
      `<h2>Hello There</h2>`,
      email,
      res
    );
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
});

module.exports = {
  createUserController,
};
