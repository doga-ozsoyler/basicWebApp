const express = require("express");
const {
  createUserController,
  signinController,
  checkEnterCodeController,
} = require("../controllers/userControllers");

const userRoutes = express.Router();

userRoutes.post("/create", createUserController);
userRoutes.post("/signin", signinController);
userRoutes.post("/checkEnterCode", checkEnterCodeController);

module.exports = userRoutes;
