
const bcrypt = require("bcrypt");
const {
    createAdmin,
    getAllAdmins,
    getAdminByEmail
} = require("../models/adminModel");

const jwt = require("jsonwebtoken");

const testAdmin = (req, res) => {
    res.json({
        success: true,
        message: "Admin Controller Working 🚀"
    });
};

const registerAdmin = async (req, res) => {
    try {
        const { full_name, email, password, phone, role } = req.body;

        if (!full_name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please fill all required fields"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        createAdmin(
            full_name,
            email,
            hashedPassword,
            phone,
            role,
            (err, result) => {
                if (err) {
                    return res.status(500).json({
                        success: false,
                        message: err.message
                    });
                }

                res.status(201).json({
                    success: true,
                    message: "Admin Registered Successfully"
                });
            }
        );
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const loginAdmin = (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: "Email and Password are required"
        });
    }

    getAdminByEmail(email, async (err, results) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: err.message
            });
        }

        if (results.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Admin not found"
            });
        }

        const admin = results[0];

        const isMatch = await bcrypt.compare(password, admin.password);

        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid Password"
            });
        }

        const token = jwt.sign(
            {
                id: admin.id,
                email: admin.email,
                role: admin.role
            },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        res.json({
            success: true,
            message: "Login Successful",
            token,
            admin: {
                id: admin.id,
                full_name: admin.full_name,
                email: admin.email,
                role: admin.role
            }
        });
    });
};

module.exports = {
    testAdmin,
    registerAdmin,
    loginAdmin
};