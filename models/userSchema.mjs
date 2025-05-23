import mongoose from "mongoose";
import cartSchema from "./cartSchema.mjs";

const userSchema = new mongoose.Schema({
  userName: { type: String, required: true, unique: true },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Email address must be valid !",
    ],
  },
  password: { type: String, required: true, minLength: 6 },
  admin: { type: Boolean, default: false },
  cart: { type: mongoose.Schema.Types.ObjectId, ref: "Cart" },
});

export default mongoose.model("User", userSchema);
