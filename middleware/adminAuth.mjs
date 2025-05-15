import User from "../models/userSchema.mjs";

export default async function (req, res, next) {
  const id = req.user;

  let user = await User.findById(id).select('admin');

  if (!user) {
    return res.status(404).json({
      msg: "User not found",
    });
  }

  if (user.admin) {
    next();
  } else {
    return res.status(401).json({ msg: "Auth Denied" });
  }
}
