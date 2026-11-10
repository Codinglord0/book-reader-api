import User from "../models/User.js";
import Book from "../models/Book.js";

// GET ALL USERS
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select("-password");

        res.status(200).json(users);

    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
};


// CHANGE USER ROLE
export const changeUserRole = async (req, res) => {
    try {
        const { role } = req.body;

        const allowedRoles = ["reader", "supplier", "admin"];

        if (!allowedRoles.includes(role)) {
            return res.status(400).json({
                message: "Invalid role"
            });
        }

        const user = await User.findByIdAndUpdate(
            req.params.id,
            { role },
            { new: true, runValidators: true }
        ).select("-password");

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json({
            message: "User role updated",
            user
        });

    } catch (err) {
        res.status(400).json({
            error: err.message
        });
    }
};


// GET ALL BOOKS
export const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();

        res.status(200).json(books);

    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
};