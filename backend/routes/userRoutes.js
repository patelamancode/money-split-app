const User = require("../models/user");
const router = require("express").Router();
const {
  handleGetAllUsers,
  handleSignup,
  handleLogin,
} = require("../controllers/authController");

router.get("/", handleGetAllUsers);
router.post("/signup", handleSignup);
router.post("/login", handleLogin);

// get user by ID dynamic/variable type route:
// router
//   .route("/:id")
//   .get(async (req, res) => {
//     if (!req.body || !req.body.name || !req.body.email || !req.body.password) {
//       return res.status(400).send({ message: "All fields are required" });
//     }
//     try {
//       const user = await User.findById(req.params.id);
//       if (!user) return res.status(404).json({ message: "User not found" });
//       return res.status(200).json(user);
//     } catch (error) {
//       return res.status(500).json({ message: "Something went wrong" });
//     }
//   })
//   .patch(async (req, res) => {
//     if (!req.body || !req.body.name || !req.body.email || !req.body.password) {
//       return res.status(400).send({ message: "All fields are required" });
//     }
//     try {
//       const user = await User.findById(req.params.id);
//       user.name = req.body.name;
//       user.email = req.body.email;
//       user.password = req.body.password;
//       await user.save();
//       return res.status(200).json(user);
//     } catch (error) {
//       return res.status(500).json({ message: "Something went wrong" });
//     }
//   })
//   .delete(async (req, res) => {
//     try {
//       const user = await User.findByIdAndDelete(req.params.id);
//       if (!user) return res.status(404).json({ message: "User not found" });
//       return res.status(200).json("user deleted successfully");
//     } catch (error) {
//       return res.status(500).json({ message: "Something went wrong" });
//     }
//   });

module.exports = router;
