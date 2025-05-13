import User from "../models/userSchema.mjs";
import Cart from "../models/cartSchema.mjs";

// @route: POST  api/user/register
// @desc: CREATE register route for a user
// @access: public
let register = async (req, res) => {
  const { userName, email, password } = req.body; // destructure request body

  if (!userName || !email || !password) {
    return res.status(400).json({
      msg: "All fields are required",
    });
  }

  let user = await User.findOne({ email });
  if (user) {
    return res.status(400).json({ msg: "Email already exists" });
  }

  user = new User({ userName, email, password });

  await user.save(); // save to get the mongoDB user _id

  const cart = new Cart({ user: user._id, items: [] });

  await cart.save(); // save to get the mongoDB cart _id

  user.cart = cart._id;
  await user.save(); // save to DB

  res.status(201).json({ userId: user._id, cartId: cart._id });
};

// @route: POST  api/user/login
// @desc: CREATE login for a user
// @access: public

let login = async (req, res) => {
  const { userName, email, password } = req.body; // destructure request body

  if (!email || !password) {
    return res.status(400).json({
      msg: "All fields are required",
    });
  }

  let user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ msg: "Invalid Credntials" });
  }

  if (password != user.password) {
    return res.status(400).json({ msg: "Invalid Credentials" });
  }

  res.status(200).json({ userId: user._id, cartId: user.cart });
};

let getData = async (req, res) => {
  let user = await User.findById(req.user).select("-password");
  res.status(200).json(user);
};

export default { register, login, getData };
