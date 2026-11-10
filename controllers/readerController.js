import User from "../models/user.js";

export const getReaderProfile = async (req, res) => {
    try {
        const reader = await User.findById(req.user.id)
            .select("-password");

        if (!reader) {
            return res.status(404).json({
                message: "Reader not found"
            });
        }

        res.status(200).json(reader);

    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
};