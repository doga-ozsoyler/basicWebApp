const express = require("express");
const dbConnect = require("./config/dbConnect");
require("dotenv").config();
const PORT = process.env.PORT;

const app = express();

app.use(express.json());

dbConnect();

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
