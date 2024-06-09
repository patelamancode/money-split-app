const mongoose = require("mongoose");

const connectDb = async (url) => {
  try {
    await mongoose.connect(url);
    console.log("MongoDB is connected successfully");
  } catch (error) {
    console.error("MongoDB is not connected. Error:", error.message);
  }
};

module.exports = {
  connectDb,
};
