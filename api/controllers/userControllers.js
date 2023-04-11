const expressHandler = require("express-async-handler");
const User = require("../models/user");
const sendEmail = require("../helpers/sendEmail");
const makeToken = require("../helpers/makeToken");

const createUserController = expressHandler(async (req, res) => {
  try {
    const { email } = req?.body;

    const userExists = await User.findOne({ email: email });

    if (userExists) {
      return res
        .status(404)
        .json({ success: false, message: "User already exist" });
    }

    const user = await User.create({
      email: email,
      status: req?.body?.status,
    });

    const token = makeToken(user);
    await sendEmail(
      "Invitation to StromaWebApp",
      `<h2>Hello There</h2>
      <a href=http://localhost:9000/api/user?token=${token}>WebApp Link</a>`,
      email,
      res
    );
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
});

const signinController = expressHandler(async (req, res) => {
  try {
    const { email } = req?.body;

    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(404).json({ success: false, message: "Invalid email" });
    }
    const sixDigitsCode = Math.floor(100000 + Math.random() * 900000);
    await User.findOneAndUpdate({ email: email }, { enterCode: sixDigitsCode });
    await sendEmail(
      "Sign in to StromaWebApp",
      `<h2>Hello There</h2>
      <p>${sixDigitsCode}</p>`,
      email,
      res
    );
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
});

const checkEnterCodeController = expressHandler(async (req, res) => {
  try {
    const { email, enterCode } = req?.body;

    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(404).json({ success: false, message: "Invalid email" });
    }

    if (enterCode !== user.enterCode)
      return res
        .status(400)
        .json({ success: false, message: "Code is incorrect" });

    const token = makeToken(user._id);

    res.status(201).json({ success: true, message: "Signin Success!", token });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
});

const fetchUserController = expressHandler(async (req, res) => {
  try {
    if (!req.user)
      return res.json({ success: false, message: "Invalid Authentication" });

    res.status(200).json({
      success: true,
      message: "User is successfully returned!",
      userInfo: req?.user,
    });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
});

module.exports = {
  createUserController,
  signinController,
  checkEnterCodeController,
  fetchUserController,
};
