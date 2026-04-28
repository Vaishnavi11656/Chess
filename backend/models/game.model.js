const mongoose = require("mongoose");

const gameSchema = mongoose.Schema(
    {
        roomCode: { type: String, required: true },
        whiteId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        blackId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        result: { type: String, enum: ["White", "black", "Draw"], required: true },
        reason: {
            type: String,
            enum: ["Checkmate", "draw", "timeout", "resign", "other"],
            required: true,
        },
        statedAt: { type: Date, default: Date.now() },
        endedAt: { type: Date, default: null },
        duration: { type: Number, default: 0 },

    },
    { timestamps: true },
);

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;