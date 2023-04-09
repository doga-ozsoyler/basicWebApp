const express = require("express");
const dbConnect = require("./config/dbConnect");
const userRoutes = require("./routes/userRoutes");
require("dotenv").config();
const PORT = process.env.PORT;

const app = express();

app.use(express.json());

dbConnect();

app.use("/api/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
