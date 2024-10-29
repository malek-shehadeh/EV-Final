// const User = require("../models/User");
// const jwt = require("jsonwebtoken");

// // Helper function to generate JWT
// const generateToken = (id) => {
//   return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
// };

// // Register user
// exports.register = async (req, res) => {
//   const { username, email, password } = req.body;

//   try {
//     const userExists = await User.findOne({ email });

//     if (userExists) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     const user = await User.create({
//       username,
//       email,
//       password,
//     });

//     res.status(201).json({
//       _id: user._id,
//       username: user.username,
//       email: user.email,
//       token: generateToken(user._id),
//     });
//   } catch (error) {
//     console.error("Error during registration:", error);
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };

// // Login user
// exports.login = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });

//     if (user && (await user.matchPassword(password))) {
//       res.cookie("token", generateToken(user._id), {
//         httpOnly: true,
//         secure: process.env.NODE_ENV === "production", // Use secure cookies in production
//         sameSite: "strict",
//       });
//       res.json({
//         _id: user._id,
//         username: user.username,
//         email: user.email,
//         token: generateToken(user._id),
//       });
//     } else {
//       res.status(401).json({ message: "Invalid email or password" });
//     }
//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// };
// //////////////////////
// const User = require("../models/User");
// const jwt = require("jsonwebtoken");

// // Helper function to generate JWT
// const generateToken = (id) => {
//   return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
// };

// // Register user
// exports.register = async (req, res) => {
//   const { username, email, password } = req.body;
//   try {
//     // Check if all required fields are provided
//     if (!username || !email || !password) {
//       return res
//         .status(400)
//         .json({ message: "Please provide all required fields" });
//     }

//     // Check if user already exists
//     const userExists = await User.findOne({ $or: [{ email }, { username }] });
//     if (userExists) {
//       return res
//         .status(400)
//         .json({ message: "User with this email or username already exists" });
//     }

//     // Create new user
//     const user = await User.create({
//       username,
//       email,
//       password,
//     });

//     if (user) {
//       res.status(201).json({
//         _id: user._id,
//         username: user.username,
//         email: user.email,
//         token: generateToken(user._id),
//       });
//     } else {
//       res.status(400).json({ message: "Invalid user data" });
//     }
//   } catch (error) {
//     console.error("Error during registration:", error);
//     res.status(500).json({
//       message: "Server error during registration",
//       error: error.message,
//       stack: process.env.NODE_ENV === "production" ? "🥞" : error.stack,
//     });
//   }
// };

// // Login user
// exports.login = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await User.findOne({ email });
//     if (user && (await user.matchPassword(password))) {
//       res.json({
//         _id: user._id,
//         username: user.username,
//         email: user.email,
//         token: generateToken(user._id),
//       });
//     } else {
//       res.status(401).json({ message: "Invalid email or password" });
//     }
//   } catch (error) {
//     console.error("Error during login:", error);
//     res.status(500).json({
//       message: "Server error during login",
//       error: error.message,
//       stack: process.env.NODE_ENV === "production" ? "🥞" : error.stack,
//     });
//   }
// };
/////////////////ok up الامور تمام تحت//////////////

// authController.js
const User = require("../models/User");
const jwt = require("jsonwebtoken");

// Helper function to generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

// Register user
exports.register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    // Check if all required fields are provided
    if (!username || !email || !password) {
      return res
        .status(400)
        .json({ message: "Please provide all required fields" });
    }
    // Check if user already exists
    const userExists = await User.findOne({ $or: [{ email }, { username }] });
    if (userExists) {
      return res
        .status(400)
        .json({ message: "User with this email or username already exists" });
    }
    // Create new user
    const user = await User.create({
      username,
      email,
      password,
    });
    if (user) {
      res.status(201).json({
        _id: user._id,
        username: user.username,
        email: user.email,
        isApproved: user.isApproved,
        token: generateToken(user._id),
      });
    } else {
      res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({
      message: "Server error during registration",
      error: error.message,
      stack: process.env.NODE_ENV === "production" ? "🥞" : error.stack,
    });
  }
};

// Login user
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
      // Check if the user is approved
      if (!user.isApproved) {
        return res.status(403).json({
          message: "Your account is not approved. Please contact support.",
        });
      }
      res.json({
        _id: user._id,
        username: user.username,
        email: user.email,
        isApproved: user.isApproved,
        token: generateToken(user._id),
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({
      message: "Server error during login",
      error: error.message,
      stack: process.env.NODE_ENV === "production" ? "🥞" : error.stack,
    });
  }
};
