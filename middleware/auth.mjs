export default function (req, res, next) {
  let token = req.header("token");

  if (!token) {
    res.status(401).json({
      msg: "No Token, Auth Denied",
    });
  }

  if (token.length != 24) {
    res.status(401).json({
      msg: "Invalid Token, Auth Denied",
    });
  }

  req.user = token;
  next();
};
