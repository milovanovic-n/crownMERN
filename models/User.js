const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  displayName: {type: String, unique: true},
  email: {type: String, unique: true},
  password: {type: String},
  isAdmin: {type: Boolean, default: false}
});

const User = mongoose.model("User", userSchema);

module.exports = User;