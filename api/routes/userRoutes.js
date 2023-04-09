const express = require("express");
const {
  createUserController,
  signin,
} = require("../controllers/userControllers");

const userRoutes = express.Router();

userRoutes.post("/create", createUserController);
userRoutes.post("/signin", signin);

module.exports = userRoutes;
