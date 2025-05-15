import Game from "../models/gameSchema.mjs";

// @route: POST /api/game
// @desc:  CREATE admin data
// @access: Private
// with auth and adminAuth middleware
let createGame = async (req, res) => {
  const newGame = await Game.insertOne(req.body);

  res.status(201).json(newGame);
};

// @route: GET /api/game
// @desc:  READ all games
// @access: Public
let getAllGames = async (req, res) => {
  const allGames = await Game.find({});

  res.json(allGames);
};

// @route: GET /api/game
// @desc:  READ one game
// @access: Public
let getOneGame = async (req, res) => {
  const oneGame = await Game.findById(req.params.id, req.body);

  res.json(oneGame);
};

// @route: PUT /api/game
// @desc:  UPDATE one game
// @access: Private
// with auth and adminAuth middleware
let updateOneGame = async (req, res) => {
  let updatedGame = await Game.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updatedGame);
};

// @route: DELETE /api/game
// @desc:  DELETE one game
// @access: Private
// with auth and adminAuth middleware
let deleteOneGame = async (req, res) => {
  let deleteGame = await Game.findByIdAndDelete(req.params.id);

  res.json(deleteGame);
};

export default {
  createGame,
  getAllGames,
  getOneGame,
  updateOneGame,
  deleteOneGame,
};
