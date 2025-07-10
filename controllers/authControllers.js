const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// regiser
const register = async (req, res) => {
    try {
        // Extract user data from request body
        const { username, email, password, role } = req.body;

        // Validate user data
        const checkExistingUsers = await User.findOne({
            $or: [{ username }, { email },],
        });

        // If user already exists, return error
        if (checkExistingUsers) {
            return res.status(400).json({
                success: false,
                message: "User already exists with this username or email",
            });
        }

        // Hasing the passwor
        const salt = await bcrypt.genSalt(10);
        const hasshedPasswords = await bcrypt.hash(password, salt);

        // Create a new user instance and save to database
        const newelyCreatedUser = new User({
            username,
            email,
            password: hasshedPasswords,
            role: role || "user", // Default to 'user' if no role is provided
        });

        newelyCreatedUser.save();

        // Respond with success message
        if (newelyCreatedUser) {
            return res.status(202).json({
                success: true,
                message: "User registered successfully",
                data: newelyCreatedUser
            });
        } else {
            return res.status(400).json({
                success: false,
                message: "User registration failed",
            });
        }

    } catch (error) {
        console.error("Error in register:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

// login controller

const login = async (req, res) => {


    try {

        // Login logic
        const { email, password } = req.body;

        // Validate user data

        const isUserExisted = await User.findOne({ email });

        if (!isUserExisted) {
            return res.status(400).josn({
                success: false,
                message: "User does not exist with this email",
            });
        }

        // Check if the password is correct
        const isPasswordCorrect = await bcrypt.compare(password, isUserExisted.password);

        if (!isPasswordCorrect) {
            return res.status(400).json({
                success: false,
                message: "Invalid email or password",
            });
        }

        // If login is successful, respond with user data (excluding password) now create a JWT token

        const jwtToken = jwt.sign({
            userId: isUserExisted._id,
            username: isUserExisted.username,
            email: isUserExisted.email,
            role: isUserExisted.role,
        }, process.env.JWT_SECRET, {
            expiresIn: "15min",
        });

        res.status(200).json({
            success: true,
            message: "User logged in successfully",
            username : isUserExisted.username,
            data: jwtToken,
        })


    } catch (error) {
        console.log("Error in login:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

// export { register, login };

module.exports = { register, login };
