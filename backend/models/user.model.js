const mongoose = require("mongoose");
//name
//email
//password
//role -> user/admin
//avatar
//stats : {rating, wins,losses, draws, currentstreak, maxstreak}

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        passwordHash: { type: String, required: true },
        role: { type: String, default: "USER", enum: ["USER", "ADMIN"] },
        avatar: { type: String, default: "" },
        gender: {
            type: String,
            enum: ["male", "female"],
            required: true,
        },

        coins: {
            type: Number,
            default: 100,
        },

        lastClaim: {
            type: Date,
            default: Date.now,
        },

        stats: {
            rating: { type: Number, default: 1200 },
            wins: { type: Number, default: 0 },
            losses: { type: Number, default: 0 },
            draws: { type: Number, default: 0 },
            gamesPlayed: { type: Number, default: 0 },
            currentStreak: { type: Number, default: 0 },
            maxStreak: { type: Number, default: 0 }

        },
    },
    { timestamps: true },
);

const User = mongoose.model("User", userSchema);
module.exports = { User }