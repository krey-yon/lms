const User = require("../../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Create a new user
const registerUser = async (req, res) => {
  const { userName, userEmail, password, role } = req.body;
  const existingUser = await User.findOne({
    $or: [{ userEmail }, { userName }],
  });

  if (existingUser) {
    return res
      .status(400)
      .json({ success: false, message: "User already exists" });
  }
  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({
    userName,
    userEmail,
    role,
    password: hashedPassword,
  });
  await newUser.save();
  return res.json({ success: true, message: "User created successfully" });
};

module.exports = { registerUser };