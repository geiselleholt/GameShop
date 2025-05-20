import express from "express";
import games from "../utilities/seedData.mjs";
import Game from "../models/gameSchema.mjs";

const router = express.Router();

// @desc: Seed MongoDB with games
// @path: /seed
// @access: Public
router.get("/", async (req, res) => {
  await Game.deleteMany({}); //Delete all data
  await Game.create(games); //reseed all data
  res.send("DataBase Seeded with Games");
});

export default router;

