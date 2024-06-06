const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect("mongo url connection string", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongo DB is connected successfully");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = connectDb;
