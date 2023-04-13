const express = require("express");
const dbConnect = require("./config/dbConnect");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV !== "TEST") {
  dbConnect();
}

app.use("/api/user", userRoutes);

if (process.env.NODE_ENV !== "TEST") {
  app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
  });
}
