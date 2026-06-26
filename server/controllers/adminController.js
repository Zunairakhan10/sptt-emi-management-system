
const bcrypt = require("bcrypt");
const { createAdmin, getAllAdmins } = require("../models/adminModel");

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


module.exports = {
    testAdmin,
    registerAdmin
};