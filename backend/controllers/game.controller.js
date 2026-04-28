const Game = require("../models/game.model");

const getMatchHistory = async (req, res) => {
    const userId = req.user._id;

    const games = await Game.find({
        $or: [{ whiteId: userId }, { blackId: userId }],
    })
        .sort({ createdAt: -1 })
        .limit(10);

    res.json({ games });
};

module.exports = { getMatchHistory };