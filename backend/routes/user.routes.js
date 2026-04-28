const express = require("express");
const { getProfile } = require("../controllers/user.controllers");
const { verifyAuth } = require("../middlewares/verifyAuth");

const router = express.Router();

router.get("/profile", verifyAuth, getProfile);

module.exports = { userRouter: router };