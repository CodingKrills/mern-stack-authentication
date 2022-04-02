import asyncHandler from 'express-async-handler'
import UserModel from "../models/UserModel.js";
import generateToken from '../configs/jwt/generateToken.js'

// * ========================================================= //

// * @desc    Register a new user
// * @route   POST /api/register_user
// * @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await UserModel.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await UserModel.create({
    full_name: name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// * ========================================================= //

// * @desc    Register a new user
// * @route   POST /api/register_user
// * @access  Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  // * Check for user email
  const user = await UserModel.findOne({ email })

  if (user && password === user.password) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid credentials')
  }
});

// * ========================================================= //

export { registerUser, loginUser };

// * ========================================================= //
