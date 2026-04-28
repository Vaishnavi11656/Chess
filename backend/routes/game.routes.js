const express = require("express");
const { getMatchHistory } = require("../controllers/game.controller");
const { verifyAuth } = require("../middlewares/verifyAuth");

const router = express.Router();

router.get("/history", verifyAuth, getMatchHistory);

module.exports = { gameRouter: router };