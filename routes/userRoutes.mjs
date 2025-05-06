//imports
import express from "express";
import User from "../models/userSchema.mjs";
import Cart from "../models/cartSchema.mjs";

const router = express.Router();

// test route
// router.get("/", (req, res) => {
//   res.send("Testing Routes");
// });

// @route: POST
// @desc: CREATE register a user
// @access: public
router.post("/register", async (req, res) => {
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

  await user.save();

  const cart = new Cart({ user: user._id, items: [] });

  await cart.save();

  user.cart = cart._id;
  await user.save();

  res.status(201).json({ userId: user._id, cartId: cart._id });
});

export default router;
