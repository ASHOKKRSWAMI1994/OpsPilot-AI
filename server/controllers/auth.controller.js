const User = require("../models/User");

const registerUser = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    const user = await User.create({
      fullName,
      email,
      password,
    });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  registerUser,
};