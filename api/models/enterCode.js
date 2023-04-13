const mongoose = require("mongoose");

const EnterCodeSchema = new mongoose.Schema({
  enterCode: { type: Number },
  expireAt: { type: Date, expires: "15m" },
});

const EnterCode = mongoose.model("EnterCode", EnterCodeSchema);

export { EnterCode };
