const express = require("express");
const {
  createUserController,
  signinController,
  checkEnterCodeController,
  fetchUserController,
} = require("../controllers/userControllers");
const { verifyToken } = require("../middlewares/verifyToken");

const userRoutes = express.Router();

userRoutes.post("/create", createUserController);
userRoutes.post("/signin", signinController);
userRoutes.post("/checkEnterCode", checkEnterCodeController);
userRoutes.get("/info", verifyToken, fetchUserController);

module.exports = userRoutes;
