const User = require("../models/user");
const jwt = require("jsonwebtoken");
const handleGetAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    return res.status(200).json(allUsers);
  } catch (err) {
    return res.status(500).json(err.message);
  }
};

// handler for generating JWT token:
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

// for signup:
const handleSignup = async (req, res) => {
  const { name, email, password } = req.body;
  // Validating inputs
  if (!req.body || !name || !email || !password) {
    return res.status(400).send({ message: "All fields are required" });
  }
  try {
    // checkn for existance of user:
    const userExists = await User.findOne({ email: email });
    if (userExists) {
      return res.status(400).send({ message: "User already exists" });
    }
    const newUser = User.create({
      name,
      email,
      password,
    });
    // generating JWT token:
    const token = generateToken(newUser._id);
    return res
      .status(200)
      .send({ message: "User created successfully", newUser, token });
  } catch (err) {
    return res.status(400).json(err.message);
  }
};

// for login:
const handleLogin = async (req, res) => {
  const { email, password } = req.body;
  if (!req.body || !email || !password) {
    return res.status(400).send({ message: "All fields are required" });
  }
  try {
    const user = await User.findOne({ email: email });
    console.log(user);
    if (!user) {
      return res.status(400).send({ message: "User not found" });
    }
    // comparing passwords:
    const isPasswordMatch = await user.isValidPassword(password);
    if (!isPasswordMatch) {
      return res.status(400).send({ message: "Invalid credentials" });
    }
    const token = generateToken(user._id);
    return res.status(200).send({ message: "Login successful", user, token });
  } catch (err) {
    return res.status(400).json(err.message);
  }
};

module.exports = {
  handleGetAllUsers,
  handleSignup,
  handleLogin,
};
