import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";



export const register = async (req, res) => {
    try{
        const {fullName, email, password} = req.body
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = await User.create({
            fullName,
            email,
            password: hashedPassword
        })
        res.status(201).json({
            message: "User Successfully Registered",
            data: {
                fullName: newUser.fullName,
                email: newUser.email
            }
        })
    } catch (err) {
        res.status (400).json({
            error: err.message
        })
    }
}


export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        const isMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "15m" }
        );

        res.status(200).json({
            message: "Login successful",
            token,
            user: {
                id: user._id,
                fullName: user.fullName,
                email: user.email,
                role: user.role
            }
        });

    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
};