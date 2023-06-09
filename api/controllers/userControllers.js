const expressHandler = require("express-async-handler");
const User = require("../models/user");
const EnterCode = require("../models/enterCode");
const sendEmail = require("../helpers/sendEmail");
const makeToken = require("../helpers/makeToken");

const createUserController = expressHandler(async (req, res) => {
  try {
    const { email } = req?.body;

    if (!req.user)
      return res.json({ success: false, message: "Invalid Authentication" });

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
      `<h2>Hello There</h2>
      <a href=http://localhost:19006>WebApp Link</a>`,
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

    const enterCode = await EnterCode.findById(user.enterCode);

    const sixDigitsCode = Math.floor(100000 + Math.random() * 900000);
    if (enterCode) {
      await enterCode.updateOne({
        enterCode: sixDigitsCode,
        expireAt: new Date(new Date().valueOf() + 900),
      });
    } else {
      const newEnterCode = await EnterCode.create({
        enterCode: sixDigitsCode,
      });
      await user.updateOne({ enterCode: newEnterCode._id });
    }

    await sendEmail(
      "Sign in to StromaWebApp",
      `<h2>Hello There</h2>
      <p>${sixDigitsCode}. This code is valid for 15 minutes.</p>`,
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

    const enterCodeFromDb = await EnterCode.findById(user.enterCode);

    if (!enterCodeFromDb || enterCodeFromDb.enterCode !== enterCode)
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
