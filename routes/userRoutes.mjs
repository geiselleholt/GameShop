import express from "express";
import userController from "../controllers/userController.mjs";
import auth from "../middleware/auth.mjs";

const router = express.Router();

////////////
// test route
// router.get("/", (req, res) => {
//   res.send("Testing Routes");
// });
////////////

// @route: POST /api/user/register
// @desc:  CREATE a register user route
// @access: Public
router.post("/register", userController.register);

// @route: POST /api/user/login
// @desc:  CREATE a login user route
// @access: Public
router.post("/login", userController.login);

// @route: GET /api/user/login
// @desc:  READ all user data
// @access: Private
// with auth middleware
router.get("/", auth, userController.getData);


export default router;
