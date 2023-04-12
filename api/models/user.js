const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: { type: String, require: true },
  status: { type: String, require: true, default: "standart" }, //standart or admin
  enterCode: { type: mongoose.Schema.Types.ObjectId, ref: "EnterCode" },
});

module.exports = User = mongoose.model("User", UserSchema);
