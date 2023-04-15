const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI);

    console.log("Database connected");
  } catch (error) {
    console.log(`Database Error: ${error}`);
  }
};

module.exports = dbConnect;
