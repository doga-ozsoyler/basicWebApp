const express = require("express");
const {
  createUserController,
  signin,
  checkEnterCodeController,
} = require("../controllers/userControllers");

const userRoutes = express.Router();

userRoutes.post("/create", createUserController);
userRoutes.post("/signin", signin);
userRoutes.post("/checkEnterCode", checkEnterCodeController);

module.exports = userRoutes;
