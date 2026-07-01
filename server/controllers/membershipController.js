const Membership = require("../models/membershipModel");

// Get all memberships
exports.getAllMemberships = (req, res) => {
    Membership.getAllMemberships((err, results) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Error fetching memberships",
                error: err
            });
        }

        res.status(200).json({
            success: true,
            data: results
        });
    });
};

// Get membership by ID
exports.getMembershipById = (req, res) => {
    const id = req.params.id;

    Membership.getMembershipById(id, (err, results) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Error fetching membership",
                error: err
            });
        }

        if (results.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Membership not found"
            });
        }

        res.status(200).json({
            success: true,
            data: results[0]
        });
    });
};

// Create membership
exports.createMembership = (req, res) => {
    const membershipData = {
        ...req.body,
        status: req.body.status || "active"
    };

    Membership.createMembership(membershipData, (err, result) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Error creating membership",
                error: err
            });
        }

        res.status(201).json({
            success: true,
            message: "Membership created successfully",
            membershipId: result.insertId
        });
    });
};

// Update membership
exports.updateMembership = (req, res) => {
    const id = req.params.id;
    const membershipData = {
        ...req.body,
        status: req.body.status || "active"
    };

    Membership.updateMembership(id, membershipData, (err) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Error updating membership",
                error: err
            });
        }

        res.status(200).json({
            success: true,
            message: "Membership updated successfully"
        });
    });
};

// Delete membership
exports.deleteMembership = (req, res) => {
    const id = req.params.id;

    Membership.deleteMembership(id, (err) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Error deleting membership",
                error: err
            });
        }

        res.status(200).json({
            success: true,
            message: "Membership deleted successfully"
        });
    });
};
