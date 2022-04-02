import asyncHandler from 'express-async-handler'
import UserModel from "../models/UserModel.js";
import generateToken from '../configs/jwt/generateToken.js'

// * ========================================================= //

// * @desc    Register a new user
// * @route   POST /api/register_user
// * @access  Public
const registerUser = asyncHandler(async (req, res) => {

  // * required array
  let required = [];

  // * check required fields !
  if (!req.body.name) required.push("name");
  if (!req.body.email) required.push("email");
  if (!req.body.password) required.push("password");

  if (required.length === 0) {

    const { name, email, password } = req.body;

    // const userExists = await UserModel.findOne({ email });

    // if (userExists) {
    //   res.json({
    //     status: "fail",
    //     message: "User Already Exists !",
    //     response: null,
    //   });
    // }

    const user = await UserModel.create({
      name,
      email,
      password,
    });

    let response = {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    }

    if (user) {
      res.status(201).json({
        status: "success",
        message: "User Registered Succesfully !",
        response: response,
      });
    } else {
      res.status(400).json({
        status: "fail",
        message: "Something Went Wrong !",
        response: null,
      });
    }
  } else {
    // * mapping the required array list
    let message = required.map((item) => {
      return " " + item;
    });
    res.json({
      status: "fail",
      message: "Following fields are required - " + message,
      response: [],
    })
  }
})

// * ========================================================= //

// * @desc    Register a new user
// * @route   POST /api/register_user
// * @access  Public
const loginUser = asyncHandler(async (req, res) => {

  // * required array
  let required = [];

  // * check required fields !
  if (!req.body.email) required.push("email");
  if (!req.body.password) required.push("password");

  if (required.length === 0) {

    const { email, password } = req.body

    // * Check for user email
    const user = await UserModel.findOne({ email })

    if (user && password === user.password) {

      let response = {
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      }

      res.status(201).json({
        status: "success",
        message: "User Authenticated Succesfully !",
        response: response,
      });
    } else {
      res.status(400).json({
        status: "fail",
        message: "Wrong Credentials !",
        response: null,
      });
    }

  } else {
    // * mapping the required array list
    let message = required.map((item) => {
      return " " + item;
    });
    res.json({
      status: "fail",
      message: "Following fields are required - " + message,
      response: [],
    })
  }
})

// * ========================================================= //

export { registerUser, loginUser };

// * ========================================================= //
