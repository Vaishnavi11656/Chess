const { User } = require("../models/user.model");

const getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select("-passwordHash");

        return res.status(200).json({ user });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

module.exports = { getProfile };