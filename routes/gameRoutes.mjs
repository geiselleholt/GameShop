import express from "express";
import auth from "../middleware/auth.mjs";
import adminAuth from "../middleware/adminAuth.mjs";
import gameController from "../controllers/gameController.mjs";

const router = express.Router();

//////////
// test route
// router.post("/", auth, adminAuth, async (req, res) => {
//   res.send("Test Route, Admin AUth");
// });
//////////

// @route: POST /api/game
// @desc:  CREATE admin data
// @access: Private
// with auth and adminAuth middleware
router.post("/", auth, adminAuth, gameController.createGame);

// @route: GET /api/game
// @desc:  READ all games
// @access: Public
router.get("/", gameController.getAllGames);

// @route: GET /api/game
// @desc:  READ one game
// @access: Public
router.get("/:id", gameController.getOneGame);

// @route: PUT /api/game
// @desc:  UPDATE one game
// @access: Private
// with auth and adminAuth middleware
router.put("/:id", auth, adminAuth, gameController.updateOneGame);

// @route: DELETE /api/game
// @desc:  DELETE one game
// @access: Private
// with auth and adminAuth middleware
router.delete("/:id", auth, adminAuth, gameController.deleteOneGame);

export default router;
