const { Type } = require("@angular/core");
const mongoose = require("mongoose");

const friendListSchema = new mongoose.Schema({
  name: {
    Type: String,
    required: true,
  },
  email: {
    Type: String,
    required: true,
    unique: true,
  },
  groupName: {
    Type: String,
  },
});

module.exports = mongoose.model("friendList", friendListSchema);
