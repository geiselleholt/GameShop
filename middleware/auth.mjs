export default function (req, res, next) {
  let token = req.header("token");

  if (!token) {
    res.status(401).json({
      msg: "No Token, Auth Denied",
    });
  }

  try {
    if (token.length != 24) {
      throw Error("Invaild Token");
    }

    req.user = token;

    next();
  } catch (error) {
    console.log(error.message);
    res.status(401).json({ msg: "Invalid Token" });
  }
}
