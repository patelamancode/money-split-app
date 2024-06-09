const express = require("express");
const dotenv = require("dotenv");
const PORT = 5000;
const { connectDb } = require("./config/db");
const userRoutes = require("./routes/userRoutes");

const app = express();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// DB connection
connectDb(process.env.CONNECTION_URL);

// Routes
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
