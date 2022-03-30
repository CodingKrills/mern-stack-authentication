import UserModel from "../models/UserModel.js";

// * ========================================================= //

// * @desc    Register a new user
// * @route   POST /api/register_user
// * @access  Public
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await UserModel.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await UserModel.create({
    name,
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
};

// * ========================================================= //

export { registerUser };

// * ========================================================= //
