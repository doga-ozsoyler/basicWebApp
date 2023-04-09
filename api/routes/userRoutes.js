const express = require("express");
const { createUserController } = require("../controllers/userControllers");

const userRoutes = express.Router();

userRoutes.post("/create", createUserController);

module.exports = userRoutes;
