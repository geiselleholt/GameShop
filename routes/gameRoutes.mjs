import express from "express";
import auth from "../middleware/auth.mjs";
import adminAuth from "../middleware/adminAuth.mjs";

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
router.post("/", auth, adminAuth, async (req, res) => {
  const newGame = await Game.insertOne(req.body);

  res.json(newGame);
});

// @route: GET /api/game
// @desc:  READ all games
// @access: Public
router.get("/", async (req, res) => {
  const allGames = await Game.find({});

  res.json(allGames);
});

// @route: PUT /api/game
// @desc:  UPDATE one game
// @access: Private
// with auth and adminAuth middleware
router.put("/:id", auth, adminAuth, async (req, res) => {
  let updatedGame = await Game.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.json(updatedGame);
});

// @route: DELETE /api/game
// @desc:  DELETE one game
// @access: Private
// with auth and adminAuth middleware
router.delete("/:id", auth, adminAuth, async (req, res) => {
  let deleteGame = await Game.findByIdAndDelete(req.params.id);

  res.json(deleteGame);
});

export default router;
