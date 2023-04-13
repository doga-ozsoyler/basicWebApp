const mongoose = require("mongoose");

const EnterCodeSchema = new mongoose.Schema({
  enterCode: { type: Number },
  expireAt: { type: Date, expires: "15m" },
});

module.exports = EnterCode = mongoose.model("EnterCode", EnterCodeSchema);
